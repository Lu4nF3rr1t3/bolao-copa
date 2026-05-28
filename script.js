async function loadMatches() {

    const { data, error } = await supabaseClient
        .from('matches')
        .select('*')
        .order('match_date');

    if (error) {
        console.error(error);
        return;
    }

    const container = document.getElementById('matches-container');

    container.innerHTML = '';

    data.forEach(match => {

        const card = document.createElement('div');

        card.classList.add('match-card');

        card.innerHTML = `
            <div class="teams">
                <span>${match.team_home}</span>
                <span>vs</span>
                <span>${match.team_away}</span>
            </div>

            <div class="inputs">
                <input type="number" id="home-${match.id}">
                <input type="number" id="away-${match.id}">
            </div>

            <button onclick="savePrediction(${match.id})">
                Salvar Palpite
            </button>
        `;

        container.appendChild(card);
    });
}

async function savePrediction(matchId) {

    const home = document.getElementById(`home-${matchId}`).value;
    const away = document.getElementById(`away-${matchId}`).value;

    const userId = localStorage.getItem('user_id');

    const { error } = await supabaseClient
        .from('predictions')
        .insert([
            {
                user_id: userId,
                match_id: matchId,
                prediction_home: home,
                prediction_away: away
            }
        ]);

    if (error) {
        alert('Erro ao salvar palpite');
        console.error(error);
        return;
    }

    alert('Palpite salvo!');
}

loadMatches();
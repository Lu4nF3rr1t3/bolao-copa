async function loadMatches() {

    const { data, error } = await supabaseClient
        .from('matches')
        .select('*');

    console.log(data);

    if (error) {
        console.error(error);
        return;
    }

    const container = document.getElementById('matches-container');

    data.forEach(match => {

        container.innerHTML += `
            <div class="match-card">

                <h2>
                    ${match.team_home} vs ${match.team_away}
                </h2>

            </div>
        `;
    });
}

loadMatches();
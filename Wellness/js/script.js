function submitMood(mood) {
    const suggestions = getSuggestions(mood);
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
    suggestions.forEach(item => {
        const suggestion = document.createElement('div');
        suggestion.innerText = `${item.type === 'song' ? 'שיר' : 'מאמר'}: ${item.title}`;
        suggestionsDiv.appendChild(suggestion);
    });
}

function getSuggestions(mood) {
    let songs = [];
    switch (mood) {
        case 'happy':
            songs = [
                { title: 'Here Comes the Sun - The Beatles', type: 'song' },
                { title: 'Yellow Submarine - The Beatles', type: 'song' },
                { title: 'Hey Jude - The Beatles', type: 'song' }
            ];
            break;
        case 'sad':
            songs = [
                { title: 'Lose Yourself - Eminem', type: 'song' },
                { title: 'Stan - Eminem', type: 'song' },
                { title: 'Mockingbird - Eminem', type: 'song' }
            ];
            break;
        case 'angry':
        case 'stressed':
            songs = [
                { title: 'Chillhop Essentials - Lofi Hip Hop', type: 'song' },
                { title: 'Lofi Beats - Study Music', type: 'song' },
                { title: 'Lofi Hip Hop Mix - Beats to Relax/Study to', type: 'song' }
            ];
            break;
    }
    return songs;
}

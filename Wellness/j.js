function submitMood(mood) {
    const suggestions = getSuggestions(mood);
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';
    suggestions.forEach(item => {
        const suggestion = document.createElement('div');
        if (item.url) {
            const link = document.createElement('a');
            link.href = item.url;
            link.target = "_blank"; // פותח את הקישור בלשונית חדשה
            link.innerText = `${item.title}`;
            suggestion.appendChild(link);
        } else {
            suggestion.innerText = `${item.title}`;
        }
        suggestionsDiv.appendChild(suggestion);
    });

    // הוספת רקע עם אימוגי שמח במצב של "שמח"
    const emoji = document.getElementById('emoji');
    if (mood === 'happy') {
        emoji.classList.remove('hidden');
    } else {
        emoji.classList.add('hidden');
    }
}

function getSuggestions(mood) {
    let items = [];
    switch (mood) {
        case 'happy':
            items = [
                { title: 'החיים יפים', type: 'quote' },
                { title: 'Here Comes the Sun - The Beatles', url: 'https://www.youtube.com/watch?v=KQetemT1sWc', type: 'song' },
                { title: 'Yellow Submarine - The Beatles', url: 'https://www.youtube.com/watch?v=m2uTFF_3MaA', type: 'song' },
                { title: 'Hey Jude - The Beatles', url: 'https://www.youtube.com/watch?v=A_MjCqQoLLA', type: 'song' },
                { title: 'מאמר על אושר', url: 'https://www.mako.co.il/health-wellness/mental-health/Article-52b6a8d204f7161006.htm', type: 'article' }
            ];
            break;
        case 'sad':
            items = [
                { title: 'השמש תזרח', type: 'quote' },
                { title: 'Lose Yourself - Eminem', url: 'https://www.youtube.com/watch?v=_Yhyp-_hX2s', type: 'song' },
                { title: 'Stan - Eminem', url: 'https://www.youtube.com/watch?v=gOMhN-hfMtY', type: 'song' },
                { title: 'Mockingbird - Eminem', url: 'https://www.youtube.com/watch?v=S9bCLPwzSC0', type: 'song' },
                { title: 'מאמר על עצב', url: 'https://www.betipulnet.co.il/articles/%D7%A9%D7%A9%D7%A9_%D7%94%D7%92%D7%95%D7%A3_%D7%9E%D7%93%D7%91%D7%A8_%D7%90%D7%95_%D7%90%D7%99%D7%9A_%D7%9C%D7%96%D7%94%D7%95%D7%AA_%D7%A1%D7%99%D7%9E%D7%A4%D7%98%D7%95%D7%9D_%D7%A8%D7%92%D7%A9%D7%99_%D7%94%D7%9E%D7%AA%D7%97%D7%96%D7%94_%D7%9C%D7%A1%D7%99%D7%9E%D7%A4%D7%98%D7%95%D7%9D_%D7%92%D7%95%D7%A4%D7%A0%D7%99/ז', type: 'article' },
            ];
            break;
        case 'angry':
            items = [
                { title: 'אל תתווכח עם טיפשים', type: 'quote' },
                { title: 'dont worry be happy - Bob Marley', url: 'https://www.youtube.com/watch?v=d-diB65scQU', type: 'song' },
                { title: 'מאמר על כעס', url: 'https://www.mako.co.il/health-wellness/mental-health/Article-64af2ad80282761006.htm', type: 'article' }
            ];
            break;
        case 'stressed':
            items = [
                { title: 'Chillhop Essentials - Lofi Hip Hop', url: 'https://www.youtube.com/watch?v=5yx6BWlEVcY', type: 'song' },
                { title: 'Lofi Beats - Study Music', url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk', type: 'song' },
                { title: 'Lofi Hip Hop Mix - Beats to Relax/Study to', url: 'https://www.youtube.com/watch?v=5qap5aO4i9A', type: 'song' },
                { title: 'מאמר על לחץ', url: 'https://www.mako.co.il/health-wellness/mental-health/Article-c7487a518b4ce61006.htm', type: 'article' }
            ];
            break;
    }
    return items;
}

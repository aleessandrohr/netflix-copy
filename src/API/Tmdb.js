const API_KEY = "baf64e5536147c8cb581f1f3ca166ff1";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (url) => {
    const req = await fetch(`${url}`);
    const json = await req.json();
    return json;
}

const getHomeList = async () => {
    return [
        {
            slug: 'originals',
            title: "Originais Netflix",
            items: await basicFetch(`${API_BASE}/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`${API_BASE}/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'tolerated',
            title: 'Em Alta',
            items: await basicFetch(`${API_BASE}/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`${API_BASE}/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`${API_BASE}/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`${API_BASE}/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`${API_BASE}/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentário',
            items: await basicFetch(`${API_BASE}/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
    ];
}

const getMovieInfo = async (id, type) => {
    let info;
    if (id) {
        info = await basicFetch(`${API_BASE}/${type}/${id}?language=pt-BR&api_key=${API_KEY}`)
    }
    return info;
}

const functions = {
    getHomeList,
    getMovieInfo,
}

export default functions;
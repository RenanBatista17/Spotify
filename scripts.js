document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {name: 'Post Malone', image: './src/artista_post.png'},
        {name: 'XXXTentacion', image: './src/artista_xxxtentacion.png'},
        {name: 'Beatles', image: './src/artista_beatles.png'},
        {name: 'DJ Marcos', image: './src/artista_djmarcos.png'},
    ]
    
    const albumData = [
        {name: 'Album1', image: './src/artista_post.png', artist: 'Post Malone'},
        {name: 'Album2', image: './src/artista_xxxtentacion.png', artist: 'XXXTentacion'},
        {name: 'Album3', image: './src/artista_beatles.png', artist: 'Beatles'},
        {name: 'Album4', image: './src/artista_djmarcos.png', artist: 'DJ Marcos'},
    ] 

    const artistGrid = document.querySelector('.artists-grid')
    const albumGrid = document.querySelector('.album-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
            <button>
                <i class="fa-solid fa-circle-play" style="color: #22c95c;"></i>
            </i></button>
        `

        artistGrid.appendChild(artistCard)
    })

    albumData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')
        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
            <button>
                <i class="fa-solid fa-circle-play" style="color: #22c95c;"></i>
            </i></button>
        `

        albumGrid.appendChild(albumCard)
    })
})

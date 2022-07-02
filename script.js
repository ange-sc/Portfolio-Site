const navBar = document.querySelectorAll('.nav-bar li')

function createSection() {
    let newSection = document.createElement('section')
    let appendDiv = document.querySelector('.container')
    appendDiv.appendChild(newSection)
    newSection.classList.add('home')
    newSection.classList.add('fade-in')
}

createSection('home')

document.querySelector('section').innerHTML = `
    <h1>Andrew J Wentzel</h1>
    <h3>Composition, Sound, Web</h3>`

function pageLoad() {
    const observerRight = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.add('fade-right')
        })
    })
    document.querySelectorAll('h1').forEach(item => {
        observerRight.observe(item)
    })
    document.querySelectorAll('h2').forEach(item => {
        observerRight.observe(item)
    })
    document.querySelectorAll('iframe').forEach(item => {
        observerRight.observe(item)
    })
    const observerLeft = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.add('fade-left')
        })
    })
    document.querySelectorAll('.credits-container li').forEach(item => {
        observerLeft.observe(item)
    })
    document.querySelectorAll('button').forEach(item => {
        observerLeft.observe(item)
    })
    document.querySelectorAll('.contact-container li').forEach(item => {
        observerLeft.observe(item)
    })
    document.querySelectorAll('input').forEach(item => {
        observerLeft.observe(item)
    })
    document.querySelectorAll('h3').forEach(item => {
        observerLeft.observe(item)
    })
    document.querySelectorAll('h4').forEach(item => {
        observerLeft.observe(item)
    })
    document.querySelectorAll('p').forEach(item => {
        observerLeft.observe(item)
    })
}
    
pageLoad()

function resizePage(divOne, divTwo, buttonOne, buttonTwo) {
    
    divTwo.classList.toggle('hide')
    divOne.classList.toggle('hide', false)
    
    const containerWidth = document.querySelector('.container')
    
    const observeWidth = new ResizeObserver(entries => {
        const pageSize = entries[0]
        const isSmall = pageSize.contentRect.width < 1400
        const isBig = pageSize.contentRect.width >= 1400
        if (isSmall == true) {
            buttonOne.addEventListener('click', () => {
                if (divOne.classList.contains('hide')) {
                    console.log('video == hide')
                    divOne.classList.toggle('hide')
                    divTwo.classList.toggle('hide')
                }
            })
            buttonTwo.addEventListener('click', () => {
                if (divTwo.classList.contains('hide')) {
                    console.log('video == hide')
                    divOne.classList.toggle('hide')
                    divTwo.classList.toggle('hide')
                }
            })
        } else if (isBig == true) {
            divOne.classList.remove('hide')
            divTwo.classList.remove('hide')
        }
    })
    observeWidth.observe(containerWidth)
}

navBar.forEach(nav => {
    nav.addEventListener('click', () => {
        if(nav.title === nav) return
        document.querySelector('section').classList.add('fade-out')
        setTimeout(() => {
            document.querySelector('section').remove()
        }, 400);
        setTimeout(() => {
            let newSection = document.createElement('section')
            document.querySelector('.container').appendChild(newSection).classList.add(nav.title)
            document.querySelector('section').classList.add('fade-in')
        }, 400);
        setTimeout(() => {
            if (nav.title == 'home') {
                document.querySelector('section').innerHTML = 
                `<h1>Andrew J Wentzel</h1>
                <h3>Composition, Sound, Web</h3>`
                pageLoad()
            } else if (nav.title == 'music') {
                document.querySelector('section').innerHTML = 
                `<h2>Music Reel</h2>
                <div class="music-container">
                <h4 class="audio-btn">Audio Reel</h4>
                <h4 class="video-btn">Video Reel</h4>

                <div class="music-audio">
                <iframe width="100%" height="620" scrolling="no" frameborder="no" src="https://listen.reelcrafter.com/embed/591bdbcfbe72a198cba2a99d7af5e4b1?primaryColor=%231ba8b7&amp;bgColor=&amp;theme=dark&amp;hideBranding=true"></iframe>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, officia!</p>
                </div>

                <div class="music-video">
                <iframe src="https://player.vimeo.com/video/572758140?h=2083d93dd6" width="640" height="360" frameborder="0" fullscreen;="" picture-in-picture"="" allowfullscreen="">
                </iframe>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, officia!</p>

                </div>
                </div>`
                pageLoad()

                const audioDiv = document.querySelector('.music-audio')
                const videoDiv = document.querySelector('.music-video')
                const audioBtn = document.querySelector('.audio-btn')
                const videoBtn = document.querySelector('.video-btn')

                resizePage(audioDiv, videoDiv, audioBtn, videoBtn)

            } else if (nav.title == 'sound') {
                document.querySelector('section').innerHTML = 
                `<h2>Sound &amp; Video Reel</h2>

                <div class="sound-container">
                <h4 class="sound-btn">Sound</h4>
                <h4 class="video-reel-btn">Video</h4>

                <div class="sound-reel">
                <iframe src="https://player.vimeo.com/video/544742537?h=c7a11f7bd9" width="640" height="360" frameborder="0" fullscreen; picture-in-picture allowfullscreen></iframe>
                <p><a href="https://vimeo.com/544742537">Sound Editing Reel 2021.mp4</a></p>
                </div>

                <div class="video-reel">
                <iframe src="https://player.vimeo.com/video/544741777?h=2f27051e6e" width="640" height="360" frameborder="0" fullscreen; picture-in-picture allowfullscreen></iframe>
                <p><a href="https://vimeo.com/544741777">Video Editing Reel 2020</a></p>
                </div>
                </div>`
                pageLoad()

                const soundDiv = document.querySelector('.sound-reel')
                const videoDiv = document.querySelector('.video-reel')
                const soundBtn = document.querySelector('.sound-btn')
                const videoReelBtn = document.querySelector('.video-reel-btn')

                resizePage(soundDiv, videoDiv, soundBtn, videoReelBtn)
            }
            else if (nav.title == 'credits') {
                document.querySelector('section').innerHTML = 
                `<h2>Credits</h2>
                <div class="credits-container">
                    <li>2021 Construction <span class="credits-additional">(additional orchestrations)</span></li>
                    <li>2021 The Holiday Fix Up <span class="credits-additional">(composer assistant)</span></li>
                    <li>2021 God's Not Dead: We the People <span class="credits-additional">(composer assistant)</span></li>
                    <li>2021 Paper Airplane <span class="credits-additional">(re-recording mixer)</span></li>
                    <li>2021 The Letter <span class="credits-additional">(composer</span></li>
                    <li>2021 Paper Tiger <span class="credits-additional">(composer</span></li>
                    <li>2020 Be the Light <span class="credits-additional">(Score Preparation)</span></li>
                    <li>2020 Summer Happiness <span class="credits-additional">(composer) / (re-recording mixer</span></li>
                    <li>2019 We Live <span class="credits-additional">(composer)</span></li>
                    <li>2019 Hollywood Fringe Forever <span class="credits-additional">(composer)</span></li>
                    <li>2019 Come Into Your Own <span class="credits-additional">(composer)</span></li>
                    <li>2018 God's Not Dead: A Light in Darkness <span class="credits-additional">(score preparation)</span></li>
                    <li>2018 Shred America <span class="credits-additional">(Documentary) (composer: additional music)</span></li>
                    <li>2018 Christmas: A Revenge Tale <span class="credits-additional">(composer)</span></li>
                    <li>2017 The Lord of the Things <span class="credits-additional">(composer)</span></li>
                    <li>2017 The Perfect Christmas Present <span class="credits-additional">(TV Movie) (score preparation)</span></li>
                    <li>2017 The Lord of the Things <span class="credits-additional">(composer: theme music)</span></li>
                    <li>2016 We Men Are Lions <span class="credits-additional">(composer: theme music)</span></li>
                    <li>2015 Pass the Light <span class="credits-additional">(additional orchestration - uncredited) / (score preparation)</span></li>
                    <li>2015 The Accidental Pornographer <span class="credits-additional">(completed) (composer)</span></li>
                    <li>2015/II Krampus <span class="credits-additional">(composer)</span></li>
                    <li>2014 72 Hours <span class="credits-additional">(composer: additional music)</span></li>
                    <li>2014 Savage Hero <span class="credits-additional">(trailer music composer)</span></li>
                    <li>2014/II Wheels <span class="credits-additional">(additional orchestration) / (music editor) / (music preparation)</span></li>
                    <li>2014 The Sit Room <span class="credits-additional">(TV Series) (2 episodes)</span></li>
                    <li class="oldCredit">2011 Letter from Lorca <span class="credits-additional">(composer: additional music - as Andrew Wentzel)</span></li>
                    <li>2008 The Cheetah Girls: One World <span class="credits-additional">(score preparation - uncredited)</span></li>
                    </div>`
                pageLoad()
            }
            else if (nav.title == 'web') {
                document.querySelector('section').innerHTML = 
                `<h2>Web</h2>
                <h4>Website stuff</h4>
                <div class="weatherapi">
                
                </div
                `
                pageLoad()
            }
            else if (nav.title == 'contact') {
                document.querySelector('section').innerHTML = 
                `<h2>Contact</h2>

                <div class="contact-container">
                <li>(310) 344-3084</li>
                <li>andrew.wentzel@icloud.com</li>
                <form action="">
                <li>
                    <p>Name:</p>
                    <input type="name">
                </li>
                <li>
                    <p>Email:</p>
                    <input type="email">
                </li>
                <li>
                    <p>Number:</p>
                    <input type="phone">
                </li>
                <li>
                    <p>Message:</p>
                    <textarea></textarea>
                </li>
                <li>
                    <button>Submit</button>
                </li>
                </form>
                </div>`
                pageLoad()
            }  else if (nav.title == 'imdb') {
                console.log('imdb click')
            }
        }, 700);
    })
})



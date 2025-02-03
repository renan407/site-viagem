/*function Home(){
  return <div href="style.css">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://fonts.googleapis.com/css?family=Vollkorn:400,400i,600,700,900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>The Road</title>
  </head>
  <body>
    <div class="container">
  
      <div class="open-navbar-icon navbar-icon center">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="navbar-wrapper">
        <nav class="navbar">
          <div class="close-navbar-icon navbar-icon center">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
          </div>
          <div class="nav-list">
            <a href="#" class="nav-link center">Home</a>
            <a href="#" class="nav-link center">Tours</a>
            <a href="#" class="nav-link center">About Us</a>
            <a href="#" class="nav-link center">Offer</a>
            <a href="#" class="nav-link center">Contact</a>
          </div>
        </nav>
      </div>

      <header class="header center">
        <div class="header-text">
          <h1 class="heading">O céu é o limite!</h1>
          <p class="header-paragraph">
            "Viajar- a princípio ficamos sem palavras, depois nos tornamos em contadores de
            histórias"
          </p>
        </div>
        <img
          src="images/air-balloon.png"
          alt="Header Image"
          class="header-image"
        />
        <div class="logo">
          <h1>
            <span class="center">t</span>
            <span class="center">h</span>
            <span class="center">e</span>
            <span class="center">r</span>
            <span class="center">o</span>
            <span class="center">a</span>
            <span class="center">d</span>
          </h1>
        </div>
      </header>
  
      <section class="popular-tours">
        <h1 class="popular-tours-heading">Passeios Populares</h1>
        <div class="cards-wrapper">
          <div class="card">
            <div class="front-side">
              <img src="images/Gramado.jpg" alt="Forest" class="card-image" />
              <h1 class="tour-name">Gramado - RS</h1>
              <ul class="card-list">
                <li class="card-list-item">Tour de 7 dias</li>
                <li class="card-list-item"> Até 20 pessoas</li>
                <li class="card-list-item">Guia Turístico</li>
                <li class="card-list-item">Hotel</li>
                <li class="card-list-item">Difficulty: medium</li>
              </ul>
              <button class="navigation-button">
                preço &gt;&gt;
              </button>
            </div>
            <div class="back-side center">
              <button class="navigation-button">
                &lt;&lt; voltar
              </button>
              <h3 class="tour-price">$399</h3>
              <button class="card-button">Reserva</button>
            </div>npm
          </div>
          <div class="card">
            <div class="front-side">
              <img src="images/Jericoacoara1.jpg" alt="River" class="card-image" />
              <h1 class="tour-name">Jericoara - CE</h1>
              <ul class="card-list">
                <li class="card-list-item">Tour de 9 dias</li>
                <li class="card-list-item">Até 20 pessoas</li>
                <li class="card-list-item">Guia Turístico</li>
                <li class="card-list-item">Sleep in private tents</li>
                <li class="card-list-item">Difficulty: hard</li>
              </ul>
              <button class="navigation-button">
                preço &gt;&gt;
              </button>
            </div>
            <div class="back-side center">
              <button class="navigation-button">
                &lt;&lt; voltar
              </button>
              <h3 class="tour-price">$499</h3>
              <button class="card-button">Reserva</button>
            </div>
          </div>
          <div class="card">
            <div class="front-side">
              <img src="images/taipudefora-820x547.jpg" alt="Sea" class="card-image" />
              <h1 class="tour-name">Taipu de Fora - BA</h1>
              <ul class="card-list">
                <li class="card-list-item">Tour de 5 dias</li>
                <li class="card-list-item">Até 40 pessoas</li>
                <li class="card-list-item">Guia Turístico</li>
                <li class="card-list-item">Sleep in hotel</li>
                <li class="card-list-item">Difficulty: easy</li>
              </ul>
              <button class="navigation-button">
                preço &gt;&gt;
              </button>
            </div>
            <div class="back-side center">
              <button class="navigation-button">
                &lt;&lt; voltar
              </button>
              <h3 class="tour-price">$599</h3>
              <button class="card-button">Reserva</button>
            </div>
          </div>
        </div>
      </section>
      
      <section class="stories">
        <div class="video-container">
          <video class="bg-video" autoplay muted loop>
            <source src="images/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="stories-wrapper">
          <div class="story-bg">
            <div class="story">
              <img
                src="images/story-img-1.jpg"
                alt="Customer image"
                class="story-image"
              />
              <div class="story-text">
                <h1 class="story-heading">
                  Estes foram os melhores dias desse ano.
                </h1>
                <p class="story-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto quas, repudiandae veritatis nam mollitia cumque
                  distinctio, quia aperiam aliquid at consequuntur libero
                  quisquam facilis laborum inventore repellat perspiciatis vel
                  fugiat molestias recusandae eum necessitatibus quo possimus
                  aspernatur? Nobis, architecto eaque.
                </p>
              </div>
            </div>
          </div>
          <div class="story-bg">
            <div class="story">
              <img
                src="images/story-img-2.jpg"
                alt="Customer image"
                class="story-image"
              />
              <div class="story-text">
                <h1 class="story-heading">
                Maravilhoso passeio, farei outro em breve.
                </h1>
                <p class="story-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto quas, repudiandae veritatis nam mollitia cumque
                  distinctio, quia aperiam aliquid at consequuntur libero
                  quisquam facilis laborum inventore repellat perspiciatis vel
                  fugiat molestias recusandae eum necessitatibus quo possimus
                  aspernatur? Nobis, architecto eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="contact">
        <h1 class="contact-heading">Contato</h1>
        <form class="contact-form center">
          <div class="input-group">
            <label>Nome *</label>
            <input
              type="text"
              class="contact-input"
              placeholder="Enter Your Name"
            />
          </div>
          <div class="input-groups">
            <div class="input-group">
              <label>Email *</label>
              <input
                type="email"
                class="contact-input"
                placeholder="Enter Your Email"
              />
            </div>
            <div class="input-group">
              <label>Telefone</label>
              <input
                type="text"
                class="contact-input"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div class="input-group">
            <label>Mesagem</label>
            <textarea
              class="form-textarea"
              placeholder="Your Message Here..."
            ></textarea>
          </div>
          <input type="submit" value="Enviar" class="form-btn"/>
        </form>
      </section>
    
      <footer class="footer">
        <div class="footer-list">
          <a href="#" class="footer-link">Home</a>
          <a href="#" class="footer-link">Tours</a>
          <a href="#" class="footer-link">About Us</a>
          <a href="#" class="footer-link">Offer</a>
          <a href="#" class="footer-link">Contact</a>
        </div>
        <p class="footer-paragraph">
          Copyright &copy; R_AndCode - Todos Os Direitos Reservados
        </p>
      </footer>
      
    </div>
    <script src="script.js"></script>
  </body>
    </div>
  
}

export default Home */
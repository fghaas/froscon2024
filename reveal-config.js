// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

    controls: true,

    progress: true,
    history: true,
    center: true,
    showNotes: true,

    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: false,

    transition: 'fade',


    totalTime: 40 * 60,


    menu: {
        themes: true,

        themesPath: 'reveal.js/dist/theme',

        transitions: false,
        openButton: true,
        openSlideNumber: true,
        markers: true
    },



    multiplex: {
        secret: multiplex_config['secret'],
        id: multiplex_config['socketId'],
        url: "https://reveal-multiplex.glitch.me"
    },





    dependencies: [
       { src: 'https://reveal-multiplex.glitch.me/socket.io/socket.io.js', async: true },
       { src: 'https://reveal-multiplex.glitch.me/client.js', async: true }
    ],


    plugins: [
	RevealMarkdown,
	RevealNotes,
	RevealHighlight,
        RevealZoom,
        RevealMenu
    ]

});

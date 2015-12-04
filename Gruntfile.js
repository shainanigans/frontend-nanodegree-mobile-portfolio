module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      autoprefixer:{
        dist:{
          files:{
            'css/style.css':'style/style.css'
          }
        }
      },
      inlinecss: {
        main: {
            options: {
            },
            files: {
                'index.html': 'index-build.html'
            }
        }
    },
      responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: "small",
            width: 100,
            quality: 80
          },{
            name: "medium",
            width: 320,
            quality: 80
          },{
            name: "large",
            width: 720,
            quality: 80
          }]
        },

        /* Where to get and put images */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'views/images',
          dest: 'views/images'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['views/images/pizzeria'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['views/images/pizzeria']
        },
      },
    }
    });
    /* CSS Tasks */
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-inline-css');
    /* Image Tasks */
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    /* Default Task */
    grunt.registerTask('default', ['autoprefixer', 'clean', 'mkdir', 'responsive_images']);
}
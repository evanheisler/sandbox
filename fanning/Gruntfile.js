module.exports = function(grunt) {

  grunt.initConfig({

    // Watches for changes and runs tasks
    // Livereload is setup for the 35729 port by default
    watch: {
      html: {
        files: ['**/*.html'],
        options: {
          livereload: 35729
        }
      },
      css: {
        files: ['**/*.css'],
        options: {
          livereload: 35729
        }
      }
    }

  });

  // Default task
  grunt.registerTask('default', ['watch']);

  grunt.loadNpmTasks('grunt-contrib-watch');

};
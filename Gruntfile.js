module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost'
        }
      }
    },
    watch : {
      scss: {
        files: ['**/*.scss'],
        tasks: ['compass']
      },
    }
  });
  grunt.registerTask('default', ['connect', 'watch']);
};

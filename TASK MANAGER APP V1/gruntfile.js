// Here we configure deployment tasks
module.exports=function(grunt){
    
// Project configuration. 
grunt.initConfig({
  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'dest/output.min.js': ['controller/*.js']
      }
    }
  },  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'custom/',
      src: ['*.css', '!*.min.css'],
      dest: 'custom/',
      ext: '.min.css'
    }]
  }
}
});
    

  

    
    grunt.registerTask('default',['uglify','cssmin']);
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


};
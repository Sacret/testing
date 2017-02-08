var build = './build';

var locations = {
  js: './js',
  less: './less'
}

module.exports = {
  locations: locations,
  browserify: {
    files: [
      locations.js + '/index.js'
    ],
    dest: build,
    name: 'app.js'
  },
  css: {
    files: [
      build + '/css/app.css'
    ],
    name: 'app.css',
    dest: build + '/css/'
  },
  less: {
    src: locations.less + '/app.less',
    watch: locations.less + '/**',
    dest: build + '/css/'
  }
};

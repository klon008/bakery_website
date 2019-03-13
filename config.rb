#http_path = "C:\\wamp64\\www\\bakery_website\\"
#project_path = "C:\\wamp64\\www\\bakery_website\\"
css_dir = 'css'
sass_path = 'scss'
scss_dir = 'scss'
images_path = 'img'
#output_style = :compressed
sourcemap = false
cache = true
on_stylesheet_saved do
  system('echo ');
end
const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında', 'footer': '© Utku Çelebi 2021' });
}


module.exports={
	hakkinda
}
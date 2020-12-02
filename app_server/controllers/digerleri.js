const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında', 'copyright': '© Utku Çelebi 2020' });
}


module.exports={
	hakkinda
}
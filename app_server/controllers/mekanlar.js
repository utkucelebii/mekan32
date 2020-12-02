
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
  { 'baslik': 'Anasayfa',
	'copyright': '© Utku Çelebi 2020',
	'sayfaBaslik':{
		'siteAd':'mekan32',
		'aciklama':'Isparta civarındaki mekanları keşfedin!'
	 },
	'mekanlar':[
	 {
		'ad':'Starbucks',
		'adres':'Centrum Garden',
		'puan':'3',
		'imkanlar':['kahve','çay','pasta'],
		'mesafe':'10km'
	 },
	 {
		'ad':'Gloria Jeans',
		'adres':'Iyaş Avm',
		'puan':'2',
		'imkanlar':['kahve','kek','çay'],
		'mesafe':'6km'
	 },
	 {
		'ad':'Gramafon Cafe',
		'adres':'Ülkü Sk., Kepeci Mh.',
		'puan':'5',
		'imkanlar':['İçeride servis','Paket Servis','Müzik'],
		'mesafe':'2km'
	 },
	 {
		'ad':'Gizli Bahçe',
		'adres':'1306. Sk., Gazi Kemal Mh.',
		'puan':'4',
		'imkanlar':['kahve','çay','tatlı'],
		'mesafe':'5km'
	 },
	 {
		'ad':'Simit Cafe',
		'adres':'108. Cad., Anadolu Mh.',
		'puan':'1',
		'imkanlar':['kahve','çay','simit'],
		'mesafe':'20km'
	 }
	]
  }
  );
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay',
  { 'baslik': 'Mekan Bilgisi',
	'sayfaBaslik':'Starbucks',
	'copyright': '© Utku Çelebi 2020',
	'mekanBilgisi':{
		'ad':'Starbucks',
		'adres':'Centrum Garden AVM',
		'puan':'3',
		'imkanlar':['Dünya Kahveleri','Kek','Pasta'],
		'koordinatlar':{
			'enlem':37.781885,
			'boylam':30.566034
		},
		'saatler':[
			{
				'gunler':'Pazartesi-Cuma',
				'acilis':'07:00',
				'kapanis':'22:30',
				'kapali':false
			},
			{
				'gunler':'Cumartesi',
				'acilis':'09:00',
				'kapanis':'22:30',
				'kapali':false
			},
			{
				'gunler':'Pazar',
				'kapali':true
			}
		],
		'yorumlar':[
			{
				'yorumYapan':'Utku Çelebi',
				'puan':3,
				'yarih':'01.12.2020',
				'yorumMetni':'Kahveler oldukça başarılı'
			}
		]
	 }
  }
  );
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle', 'copyright': '© Utku Çelebi 2020' });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}
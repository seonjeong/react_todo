import express from 'express';

const router = express.Router();

const data = [{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목0',
        'subtitle': '책 부제목0',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    },{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목1',
        'subtitle': '책 부제목1',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    },{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목2',
        'subtitle': '책 부제목2',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    },{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목3',
        'subtitle': '책 부제목3',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    },{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목4',
        'subtitle': '책 부제목4',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    },{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목5',
        'subtitle': '책 부제목5',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    },{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목6',
        'subtitle': '책 부제목6',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    },{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목7',
        'subtitle': '책 부제목7',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    },{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목8',
        'subtitle': '책 부제목8',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    },{
        'img' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
        'title': '책 제목9',
        'subtitle': '책 부제목9',
        'star': '5',
        'author': '지은이',
        'company': '출판사',
        'year': '2016',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
        'comment': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
    }]


router.get('/ajax/list', (req, res) => {
    const body = data;
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200);
    res.send(body);
    res.end();
});

router.get('/ajax/detail', (req, res) => {
    const index = req.query.index || 0;
    const body = data[index];
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200);
    res.send(body);
    res.end();
});

export default router;

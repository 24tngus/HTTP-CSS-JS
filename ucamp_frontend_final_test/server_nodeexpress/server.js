//node, express 로 구성한 restful webservice
const express = require('express');
const cors = require('cors');
const port = 4500;
const app = express();

let nextId = 4;

let tutorials = [
  {
    id: 1,
    title: 'Java프로그래밍',
    description: "Java언어를 학습할 수 있는 튜토리얼",
    published: true
  },
  {
    id: 2,
    title: 'HTML과CSS',
    description: "Html5와 CSS3을 학습할 수 있는 튜토리얼",
    published: true
  },
  {
    id: 3,
    title: 'VueJS2',
    description: "VueJS2를 학습할 수 있는 튜토리얼",
    published: false
  },
];

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

//Tutorial 전체 조회
app.get('/api/tutorials', (req, res) => {
  setTimeout(() => {
    res.send(tutorials);
  }, 1000);
});

//Tutorial 등록
app.post('/api/tutorials', (req, res) => {
  const newTutorial = { id: getNextId(), ...req.body };
  tutorials = [...tutorials, newTutorial];
  res.status(200).json(tutorials);
});

//Tutorial 1개 조회
app.get('/api/tutorials/:id', (req, res) => {
  const tutorial = tutorials.find(p => p.id == req.params.id);

  if (tutorial) {
    res.status(200).json(tutorial);
  } else {
    res.status(404).send({ error: 'Tutorial not found' });
  }
});

//Tutorial 1개 삭제
app.delete('/api/tutorials/:id', function (request, response) {
  // 변수를 선언합니다.
  var id = Number(request.params.id);
  const tIndex = tutorials.findIndex(f => f.id == id);

  if (isNaN(id)) {
    // 오류: 잘못된 경로
    response.send({
      error: '숫자를 입력하세요!'
    });
  } else if (tutorials[tIndex]) {
    // 정상: 데이터 삭제
    tutorials.splice(tIndex, 1);
    response.send(tutorials);
  } else {
    // 오류: 요소가 없을 경우
    response.send({
      error: '존재하지 않는 데이터입니다!'
    });
  }
});


function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});

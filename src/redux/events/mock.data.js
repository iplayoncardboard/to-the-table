const EVENT_DATA = {
    1: {
        id:1,
        title:'Awesome Game Night',
        privateEvent: true,
        date: {
            date:'10/06/2019',
            time: '7:00 PM'
        },
        address: {
            street: '3424 W Melody Dr',
            city: 'Laveen',
            state: 'az',
            zip: '85339'
        },
        attendees:['Jason', 'Cassie'],
        games: [
            {   
                id:1,
                name:'Catan',
                imageUrl: 'https://cf.geekdo-images.com/itemrep/img/aozRplCSOpRucLxSuClX2odEUBQ=/fit-in/246x300/pic2419375.jpg',
                votes: 2
            }, 
            {
                id:4,
                name:'Edge of Darkness',
                imageUrl:'https://cf.geekdo-images.com/itemrep/img/78tzoi0wN6IxfxJLqg4tuwt3hRk=/fit-in/246x300/pic3691121.jpg',
                votes: 12
            },
            {
                id:13,
                name: "Sagrada",
                imageUrl:"https://cf.geekdo-images.com/itemrep/img/N_qhXyarR58U2An3A00Kgcs89IQ=/fit-in/246x300/pic3525224.jpg",
                votes: 5
            }
        ]
    },
    2: {     id:2,
        title:'Birthday Game Night',
        privateEvent: true,
        date: {
            date:'09/30/2019',
            time: '7:00 PM'
        },
        address: {
            street: '3424 W Melody Dr',
            city: 'Laveen',
            state: 'az',
            zip: '85339'
        },
        attendees:[],
        gamesIds: []},
    3: {     
        id:3,
        privateEvent: false,
        title:'Spooky Game Night',
        date: {
            date:'10/31/2019',
            time: '11:00 PM'
        },
        address: {
            street: '3424 W Melody Dr',
            city: 'Laveen',
            state: 'az',
            zip: '85339'
        },
        attendees:[],
        gamesIds: []},
    4:{     id:4,
        privateEvent: false,
        title:'Regular Game Night',
        date: {
            date:'11/06/2019',
            time: '7:00 PM'
        },
        address: {
            street: '3424 W Melody Dr',
            city: 'Laveen',
            state: 'az',
            zip: '85339'
        },
        attendees:[],
        gamesIds: []},
    5:{     id:5,
        privateEvent: true,
        title:'Camping Game Night',
        date: {
            date:'11/12/2019',
            time: '7:00 PM'
        },
        address: {
            street: '123 Campsite dr.',
            city: 'Apache Junction',
            state: 'az',
            zip: '85222'
        },
        attendees:[],
        gamesIds: []}
    };

export default EVENT_DATA;
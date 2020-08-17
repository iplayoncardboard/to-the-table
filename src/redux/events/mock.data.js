const EVENT_DATA = {
    1: {
        id:1,
        creator: {
            userName: '',
            email: ''
        },
        title:'Awesome Game Nightz',
        privateEvent: true,
        baseVotes: 5,
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
        attendees:[
            {
            id:'Mbx2K9nnIqNHPZTBFI45zRfzB7q1', 
            name: 'Erik Hurst',
            imageUrl: 'https://robohash.org/erik.png?set=set4',
            votesRemaining: 5,
            votesCast: []
        }, 
            {
            id:'523453425',
            name: 'Jason',
            imageUrl: 'https://robohash.org/jason.png?set=set4',
            votesRemaining: 5,
            votesCast: []}, 
            {
            id:'4324563457634',
            name:'Cassie',
            imageUrl: 'https://robohash.org/cassie.png?set=set4',
            votesRemaining: 5,
            votesCast: []},  {
                id:'xWuuLEY8OkNsl3Ie1jhmhlW3GhO2', 
                name: 'Cardboard Guru',
                imageUrl: 'https://robohash.org/leah.png?set=set4',
                votesRemaining: 5,
                votesCast: []}],
        games: [
            {   
                id:1,
                name:'Catan',
                imageUrl: 'https://cf.geekdo-images.com/itemrep/img/aozRplCSOpRucLxSuClX2odEUBQ=/fit-in/246x300/pic2419375.jpg',
                votes: 0,
                votesCast: []
            }, 
            {
                id:4,
                name:'Edge of Darkness',
                imageUrl:'https://cf.geekdo-images.com/itemrep/img/78tzoi0wN6IxfxJLqg4tuwt3hRk=/fit-in/246x300/pic3691121.jpg',
                votes: 0,
                votesCast: []
            },
            {
                id:13,
                name: "Sagrada",
                imageUrl:"https://cf.geekdo-images.com/itemrep/img/N_qhXyarR58U2An3A00Kgcs89IQ=/fit-in/246x300/pic3525224.jpg",
                votes: 5,
                votesCast: []
            }
        ]
    },
    2: {     id:2,
        title:'Birthday Game Night',
        privateEvent: true,
        baseVotes: 5,
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
        attendees:[ 
            {
            id:'523453425',
            name: 'Jason',
            imageUrl: 'https://robohash.org/jason.png?set=set4',
            votesRemaining: 5,
            votesCast: []}, 
            {
            id:'4324563457634',
            name:'Cassie',
            imageUrl: 'https://robohash.org/cassie.png?set=set4',
            votesRemaining: 5,
            votesCast: []},  {
                id:'d45435435345f', 
                name: 'Leah Bergner',
                imageUrl: 'https://robohash.org/leah.png?set=set4',
                votesRemaining: 5,
                votesCast: []}],
        games: [
            {   
                id:1,
                name:'Catan',
                imageUrl: 'https://cf.geekdo-images.com/itemrep/img/aozRplCSOpRucLxSuClX2odEUBQ=/fit-in/246x300/pic2419375.jpg',
                votes: 0,
                votesCast: []
            }, 
            {
                id:4,
                name:'Edge of Darkness',
                imageUrl:'https://cf.geekdo-images.com/itemrep/img/78tzoi0wN6IxfxJLqg4tuwt3hRk=/fit-in/246x300/pic3691121.jpg',
                votes: 0,
                votesCast: []
            },
            {
                id:13,
                name: "Sagrada",
                imageUrl:"https://cf.geekdo-images.com/itemrep/img/N_qhXyarR58U2An3A00Kgcs89IQ=/fit-in/246x300/pic3525224.jpg",
                votes: 5,
                votesCast: []
            }
        ]},
    3: {     
        id:3,
        privateEvent: false,
        baseVotes: 5,
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
        baseVotes: 5,
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
        baseVotes: 5,
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
        gamesIds: []},
        6:{     id:6,
            privateEvent: true,
            baseVotes: 5,
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
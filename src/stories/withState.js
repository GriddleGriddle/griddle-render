import { PropTypes } from 'react';

import  { withContext, compose, mapProps } from 'recompose';

import Column from '../column';
import Immutable from 'immutable';

const state = {
    data: Immutable.fromJS([
    {
      "griddleKey": 0,
      "name": "Mayer Leonard",
      "city": "Kapowsin",
      "state": "Hawaii",
      "country": "United Kingdom",
      "company": "Ovolo",
      "favoriteNumber": 7
    },
    {
      "griddleKey": 1,
      "name": "Koch Becker",
      "city": "Johnsonburg",
      "state": "New Jersey",
      "country": "Madagascar",
      "company": "Eventage",
      "favoriteNumber": 2
    },
    {
      "griddleKey": 2,
      "name": "Lowery Hopkins",
      "city": "Blanco",
      "state": "Arizona",
      "country": "Ukraine",
      "company": "Comtext",
      "favoriteNumber": 3
    },
    {
      "griddleKey": 3,
      "name": "Walters Mays",
      "city": "Glendale",
      "state": "Illinois",
      "country": "New Zealand",
      "company": "Corporana",
      "favoriteNumber": 6
    },
    {
      "griddleKey": 4,
      "name": "Shaw Lowe",
      "city": "Coultervillle",
      "state": "Wyoming",
      "country": "Ecuador",
      "company": "Isologica",
      "favoriteNumber": 2
    },
    {
      "griddleKey": 5,
      "name": "Ola Fernandez",
      "city": "Deltaville",
      "state": "Delaware",
      "country": "Virgin Islands (US)",
      "company": "Pawnagra",
      "favoriteNumber": 7
    },
    {
      "griddleKey": 6,
      "name": "Park Carr",
      "city": "Welda",
      "state": "Kentucky",
      "country": "Sri Lanka",
      "company": "Cosmetex",
      "favoriteNumber": 7
    },
    {
      "griddleKey": 7,
      "name": "Laverne Johnson",
      "city": "Rosburg",
      "state": "New Mexico",
      "country": "Croatia",
      "company": "Housedown",
      "favoriteNumber": 9
    },
    {
      "griddleKey": 8,
      "name": "Lizzie Nelson",
      "city": "Chumuckla",
      "state": "Montana",
      "country": "Turks &amp; Caicos",
      "company": "Everest",
      "favoriteNumber": 2
    },
    {
      "griddleKey": 9,
      "name": "Clarke Clemons",
      "city": "Inkerman",
      "state": "Rhode Island",
      "country": "Cambodia",
      "company": "Apexia",
      "favoriteNumber": 3
    },
    {
      "griddleKey": 10,
      "name": "Cindy Phelps",
      "city": "Hachita",
      "state": "North Carolina",
      "country": "Namibia",
      "company": "Pholio",
      "favoriteNumber": 6
    },
    {
      "griddleKey": 11,
      "name": "Danielle Keller",
      "city": "Stockdale",
      "state": "Maryland",
      "country": "Cape Verde",
      "company": "Netility",
      "favoriteNumber": 10
    },
    {
      "griddleKey": 12,
      "name": "Duke Hutchinson",
      "city": "Needmore",
      "state": "Indiana",
      "country": "Brunei",
      "company": "Electonic",
      "favoriteNumber": 1
    },
    {
      "griddleKey": 13,
      "name": "Aimee Duffy",
      "city": "Brownlee",
      "state": "Vermont",
      "country": "Lebanon",
      "company": "Repetwire",
      "favoriteNumber": 2
    },
    {
      "griddleKey": 14,
      "name": "Meadows Jimenez",
      "city": "Winesburg",
      "state": "Kansas",
      "country": "Timor L'Este",
      "company": "Quonk",
      "favoriteNumber": 0
    },
    {
      "griddleKey": 15,
      "name": "Karla Potts",
      "city": "Juarez",
      "state": "Alaska",
      "country": "Samoa",
      "company": "Zentime",
      "favoriteNumber": 3
    },
    {
      "griddleKey": 16,
      "name": "Rita Jensen",
      "city": "Elwood",
      "state": "North Dakota",
      "country": "Greece",
      "company": "Valpreal",
      "favoriteNumber": 9
    },
    {
      "griddleKey": 17,
      "name": "Jackie Burke",
      "city": "Delwood",
      "state": "Arkansas",
      "country": "Greenland",
      "company": "Magmina",
      "favoriteNumber": 4
    },
    {
      "griddleKey": 18,
      "name": "Corinne Moreno",
      "city": "Wollochet",
      "state": "New Hampshire",
      "country": "Sierra Leone",
      "company": "MarketogriddleKey",
      "favoriteNumber": 1
    },
    {
      "griddleKey": 19,
      "name": "Giles Cohen",
      "city": "Carbonville",
      "state": "Massachusetts",
      "country": "Tonga",
      "company": "Ginkogene",
      "favoriteNumber": 10
    },
    {
      "griddleKey": 20,
      "name": "Maynard Barnes",
      "city": "Boling",
      "state": "Utah",
      "country": "Nepal",
      "company": "Kyaguru",
      "favoriteNumber": 8
    },
    {
      "griddleKey": 21,
      "name": "Singleton Lindsay",
      "city": "Weogufka",
      "state": "Tennessee",
      "country": "Falkland Islands",
      "company": "Egypto",
      "favoriteNumber": 5
    },
    {
      "griddleKey": 22,
      "name": "Etta Kemp",
      "city": "Como",
      "state": "Pennsylvania",
      "country": "Syria",
      "company": "Marqet",
      "favoriteNumber": 3
    },
    {
      "griddleKey": 23,
      "name": "Whitney Pennington",
      "city": "Farmington",
      "state": "Louisiana",
      "country": "Suriname",
      "company": "Prosure",
      "favoriteNumber": 10
    },
    {
      "griddleKey": 24,
      "name": "Sophie Ellison",
      "city": "Whitewater",
      "state": "Idaho",
      "country": "Malta",
      "company": "EvgriddleKeyends",
      "favoriteNumber": 1
    },
    {
      "griddleKey": 25,
      "name": "Logan Forbes",
      "city": "Idledale",
      "state": "Michigan",
      "country": "Dominican Republic",
      "company": "Pigzart",
      "favoriteNumber": 3
    }
  ]),
  events: {
    onColumnClick: (griddleKey, field) => {
      console.log(`onColumnClick for ${griddleKey}+${field}`);
    },
    onColumnHover: (griddleKey, field) => {
      console.log(`onColumnHover for ${griddleKey}+${field}`);
    }
  },
  styles: {
    column: {
      backgroundColor: "#EDEDED"
    }
  },
  classNames: {
    columns: 'superCool'
  },
  components: {
    Column
  }
}

export default compose(
  withContext(
    {
      styles: PropTypes.object,
      classNames: PropTypes.object,
      data: PropTypes.object,
      components: PropTypes.object,
      events: PropTypes.object,
      state: PropTypes.object
    },
    () => ({ ...state })
  )
)

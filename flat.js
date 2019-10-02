/*
	The following flat array represents people, every person has a parent.
	Make a tree so that every person has it's children.
*/

let people = [
	{
		id: 12,
		parentId: 0,
		text: "Man",
		level: 1,
		children: []
	},
	{
		id: 6,
		parentId: 12,
		text: "Boy",
		level: 2,
		children: []
	},
	{
		id: 7,
		parentId: 12,
		text: "Other",
		level: 2,
		children: []
	},
	{
		id: 9,
		parentId: 0,
		text: "Woman",
		level: 1,
		children: []
	},
	{
		id: 1,
		parentId: 9,
		text: "Girl",
		level: 2,
		children: []
	},
	{
		id: 10,
		parentId: 1,
		text: "Girl",
		level: 3,
		children: []
	}
];

/*
	Expected result:
	[
	  {
	    id: 12,
	    parentId: 0,
	    text: "Man",
	    level: "1",
	    children: [
	      {
	        id: 6,
	        parentId: 12,
	        text: "Boy",
	        level: "2",
	        children: []
	      },
	      {
	        id: 7,
	        parentId: 12,
	        text: "Other",
	        level: "2",
	        children: []
	      }
	    ]
	  },
	  {
	    id: 9,
	    parentId: 0,
	    text: "Woman",
	    level: "1",2
	    children: [
	      {
	        id: 1,
	        parentId: 9,
	        text: "Girl",
	        level: "2",
	        children: [
	          {
	            id: 10,
	            parentId: 1,
	            text: "Girl",
	            level: "3",
	            children: []
	          }
	        ]
	      }
	    ]
	  }
	]
*/
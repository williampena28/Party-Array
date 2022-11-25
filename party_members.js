let party = [
    {
        name: "Timothy",
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: 
        {
            name: "Velma",
            type: "bat",
        }
    },
    {
        name: "Joline",
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: 
        {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: "Sarah",
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: 
        {
            name: "Tony",
            type: "tiger",
        }
    },
]

//Prompt 1: double the hitpoints of everyone in the party
party.forEach((el) => 
{ //iterate through each element in the party array
    el.hitpoints = 2 * el.hitpoints; // double that elements hitpoints
})

//Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
party.forEach((el) => 
{
    if(el.name == "Timothy")
    {
        el.hitpoints -= el.hitpoints;
    }
})

//Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
party.forEach((el) =>
{
    if(el.name == "Sarah")
    {
        el.companion.type = "jellyfish";
    }
})

console.log(party);
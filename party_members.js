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

//Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
party.forEach((el) =>
{
    if(el.name == "Timothy")
    {
        el.hitpoints += 20;
        for(var i = 0; i < el.belongings.length; i++)
        {
            if(el.belongings[i] == "potion")
            {
                el.belongings.splice(i, 1);
                break;
            }
        }
    }
})

//Prompt 5: Timothy got hungry and stole Joline's bread.
//Take it out of her belongings and put it into Timothy's belongings.
party.forEach((el) =>
{
    if(el.name == "Timothy")
    {
        el.belongings.push("bread");
    } else if (el.name == "Joline")
    {
        for(var i = 0; i < el.belongings.length; i++)
        {
            if(el.belongings[i] == "bread")
            {
                el.belongings.splice(i, 1);
                break;
            }
        }
    }
})

//Prompt 6: Joline got upset and left the party.
//Take her out of the array.

const leaveParty = (member) =>
{
    //here I use a for loop instead of forEach since we need the index of
    //the member that is leaving for proper use of the splice() method
    for(var i = 0; i < party.length; i++)
    {
        if(party[i].name == member)
        {
            party.splice(i, 1);
            break;
        }
    }
}
leaveParty("Joline"); //splices "Joline" from the party array

const addMember = (member) =>
{
    party.push( //pushing the new member into the party array
        {
            name: member,
            hitpoints: 10,
            belongings: ["potion", "sword", "shield"],
            companion: 
            {
                name: "doug",
                type: "canine"
            }
        }
    )
}
addMember("new member");

console.log(party);
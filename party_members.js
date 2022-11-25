let party = [
    {
        name: "Timothy",
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: 
        {
            name: "Velma",
            type: "bat"
        },
        gold: 0,
        leader: false
    },
    {
        name: "Joline",
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: 
        {
            name: "Tabby",
            type: "cat"
        },
        gold: 0,
        leader: false
    },
    {
        name: "Sarah",
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: 
        {
            name: "Tony",
            type: "tiger"
        },
        gold: 0,
        leader: false
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

//Prompt 7: Timothy and Sarah have been recruiting.
//Add a new adventurer to the party.
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
            },
            gold: 0,
            leader: false
        }
    )
}
addMember("new member");

//Prompt 8: The party has been doing well! They found 200 gold.
//Create a new property called gold and split the gold evenly between everyone.
const splitGold = (amount) =>
{
    party.forEach((el) =>
    {
        //toFixed method used to round up the split amount by 2 decimals
        //parseFloat method used to convert the toFixed amount to a float instead of str
        split = amount / party.length;
        el.gold += parseFloat(split.toFixed(2));
    })
}
splitGold(200);

//Prompt 9: Sarah is tired of taking care of a jellyfish.
//Subtract some gold from her and change her companion to a bear
party.forEach((el) =>
{
    if(el.name == "Sarah")
    {
        el.companion.type = "bear"
        el.gold -= 30;
    }
})

//Prompt 10: Timothy's sword has gotten old. 
//Change it to "Rusty Sword"
party.forEach((el) =>
{
    if(el.name == "Timothy")
    {
        for(var i = 0; i < el.belongings.length; i++) //for loop to find the index of the sword to change it
        {
            if(el.belongings[i] == "sword")
            {
                el.belongings[i] = "Rusty Sword";
                break;
            }
        }
    }
})

//Prompt 11: Write a function called setLeader that takes a name as a parameter.
//The member with that name should have a new property leader: true
//while other members have leader: false.
const setLeader = (member) =>
{
    party.forEach((el) =>
    {
        if(el.name == member && el.leader == false)
        {
            el.leader = true;
            console.log(`${member} is now the party leader!`)
        } else if (el.name == member && el.leader == true)
        {
            console.log(`${member} is already party leader`);
        } else if (el.name != member && el.leader == true)
        {
            el.leader = false;
        }
    })
}
setLeader("Timothy")

console.log(party);
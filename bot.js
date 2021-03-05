// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const wikiaBasicLink = "https://monstergirlencyclopedia.fandom.com";
const wikiaBasicImageLink = "https://monstergirlencyclopedia.fandom.com/wiki/File:";
// MG object like {name, url, type, family}
var mgList = [];

function init(){
	mgList.push({name:'Holstaur', url:'/wiki/Holstaur', type:'Beastman', family:'Minotaur'});
	mgList.push({name:'Minotaur', url:'/wiki/Minotaur', type:'Beastman', family:'Minotaur'});
	mgList.push({name:'Gargoyle', url:'/wiki/Gargoyle', type:'Magic_Material', family:'Golem'});
	mgList.push({name:'Harpy', url:'/wiki/Harpy', type:'Birdman', family:'Harpy'});
	mgList.push({name:'Black Harpy', url:'/wiki/Black_Harpy', type:'Birdman', family:'Harpy'});
	mgList.push({name:'Siren', url:'/wiki/Siren', type:'Birdman', family:'Harpy'});
	mgList.push({name:'Werebat', url:'/wiki/Werebat', type:'Beastman', family:'Bat'});
	mgList.push({name:'Alraune', url:'/wiki/Alraune', type:'Plant', family:'Alraune'});
	mgList.push({name:'Honey Bee', url:'/wiki/Honey_Bee', type:'Bug', family:'Bee'});
	mgList.push({name:'Hornet', url:'/wiki/Hornet', type:'Bug', family:'Bee'});
	mgList.push({name:'Grizzly', url:'/wiki/Grizzly', type:'Beastman', family:'Bear'});
	mgList.push({name:'Cockatrice', url:'/wiki/Cockatrice', type:'Birdman', family:'Harpy'});
	mgList.push({name:'Crow Tengu', url:'/wiki/Crow_Tengu', type:'Birdman', family:'Harpy'});
	mgList.push({name:'Lamia', url:'/wiki/Lamia', type:'Reptile', family:'Lamia'});
	mgList.push({name:'Echidna', url:'/wiki/Echidna', type:'Reptile', family:'Lamia'});
	mgList.push({name:'Medusa', url:'/wiki/Medusa', type:'Reptile', family:'Lamia'});
	mgList.push({name:'Shirohebi', url:'/wiki/Shirohebi', type:'Reptile', family:'Lamia'});
	mgList.push({name:'Ryu', url:'/wiki/Ryu', type:'Reptile', family:'Dragon'});
	mgList.push({name:'Dragon', url:'/wiki/Dragon', type:'Reptile', family:'Dragon'});
	mgList.push({name:'Arachne', url:'/wiki/Arachne', type:'Bug', family:'Arachne'});
	mgList.push({name:'Giant Ant', url:'/wiki/Giant_Ant', type:'Bug', family:'Ant'});
	mgList.push({name:'Ant Arachne', url:'/wiki/Ant_Arachne', type:'Bug', family:'Arachne'});
	mgList.push({name:'Jorou-Gumo', url:'/wiki/Jorou-Gumo', type:'Bug', family:'Arachne'});
	mgList.push({name:'Girtablilu', url:'/wiki/Girtablilu', type:'Bug', family:'Arachne'});
	mgList.push({name:'Mummy', url:'/wiki/Mummy', type:'Undead', family:'Zombie'});
	mgList.push({name:'Anubis', url:'/wiki/Anubis', type:'Beastman', family:'Wolf'});
	mgList.push({name:'Sphinx', url:'/wiki/Sphinx', type:'Beastman', family:'Cat'});
	mgList.push({name:'Pharaoh', url:'/wiki/Pharaoh', type:'Undead', family:'Zombie'});
	mgList.push({name:'Werecat', url:'/wiki/Werecat', type:'Beastman', family:'Cat'});
	mgList.push({name:'Werewolf', url:'/wiki/Werewolf', type:'Beastman', family:'Wolf'});
	mgList.push({name:'Nekomata', url:'/wiki/Nekomata', type:'Beastman', family:'Cat'});
	mgList.push({name:'Ushi-Oni', url:'/wiki/Ushi-Oni', type:'Bug', family:'Arachne'});
	mgList.push({name:'Sandworm', url:'/wiki/Sandworm', type:'Bug', family:'Worm'});
	mgList.push({name:'Succubus', url:'/wiki/Succubus', type:'Demon', family:'Succubus'});
	mgList.push({name:'Kunoichi', url:'/wiki/Kunoichi', type:'Demon', family:'Succubus'});
	mgList.push({name:'Apophis', url:'/wiki/Apophis', type:'Reptile', family:'Lamia'});
	mgList.push({name:'Khepri', url:'/wiki/Khepri', type:'Bug', family:'Beetle'});
	mgList.push({name:'Thunderbird', url:'/wiki/Thunderbird', type:'Birdman', family:'Harpy'});
	mgList.push({name:'Slime', url:'/wiki/Slime', type:'Semiliquid', family:'Slime'});
	mgList.push({name:'Ogre', url:'/wiki/Ogre', type:'Demihuman', family:'Ogre'});
	mgList.push({name:'Red Oni', url:'/wiki/Red_Oni', type:'Demihuman', family:'Ogre'});
	mgList.push({name:'Blue Oni', url:'/wiki/Blue_Oni', type:'Demihuman', family:'Ogre'});
	mgList.push({name:'Nureonago', url:'/wiki/Nureonago', type:'Semiliquid', family:'Slime'});
	mgList.push({name:'Queen Slime', url:'/wiki/Queen_Slime', type:'Semiliquid', family:'Slime'});
	mgList.push({name:'Red Slime', url:'/wiki/Red_Slime', type:'Semiliquid', family:'Slime'});
	mgList.push({name:'Bubble Slime', url:'/wiki/Bubble_Slime', type:'Semiliquid', family:'Slime'});
	mgList.push({name:'Dark Slime', url:'/wiki/Dark_Slime', type:'Semiliquid', family:'Slime'});
	mgList.push({name:'Sea Slime', url:'/wiki/Sea_Slime', type:'Semiliquid', family:'Slime'});
	mgList.push({name:'Oomukade', url:'/wiki/Oomukade', type:'Bug', family:'Centipede'});
	mgList.push({name:'Kappa', url:'/wiki/Kappa', type:'Aquatic', family:'Sahuagin'});
	mgList.push({name:'Sahuagin', url:'/wiki/Sahuagin', type:'Aquatic', family:'Sahuagin'});
	mgList.push({name:'Chochin-Obake', url:'/wiki/Chochin-Obake', type:'Magic_Material', family:'Tsukumogami'});
	mgList.push({name:'Zombie', url:'/wiki/Zombie', type:'Undead', family:'Zombie'});
	mgList.push({name:'Golem', url:'/wiki/Golem', type:'Magic_Material', family:'Golem'});
	mgList.push({name:'Skeleton', url:'/wiki/Skeleton', type:'Undead', family:'Golem'});
	mgList.push({name:'Lesser Succubus', url:'/wiki/Lesser_Succubus', type:'Demon', family:'Succubus'});
	mgList.push({name:'Ghost', url:'/wiki/Ghost', type:'Undead', family:'Ghost'});
	mgList.push({name:'Doppelganger', url:'/wiki/Doppelganger', type:'Undead', family:'Ghost'});
	mgList.push({name:'Wurm', url:'/wiki/Wurm', type:'Reptile', family:'Dragon'});
	mgList.push({name:'Vampire', url:'/wiki/Vampire', type:'Undead', family:'Succubus'});
	mgList.push({name:'Dhampir', url:'/wiki/Dhampir', type:'Majin', family:'Succubus'});
	mgList.push({name:'Mantis', url:'/wiki/Mantis', type:'Bug', family:'Mantis'});
	mgList.push({name:'Lizardman', url:'/wiki/Lizardman', type:'Reptile', family:'Lizard'});
	mgList.push({name:'Salamander', url:'/wiki/Salamander', type:'Reptile', family:'Lizard'});
	mgList.push({name:'Lilim', url:'/wiki/Lilim', type:'Demon', family:'Succubus'});
	mgList.push({name:'Youko', url:'/wiki/Youko', type:'Beastman', family:'Fox'});
	mgList.push({name:'Inari', url:'/wiki/Inari', type:'Beastman', family:'Fox'});
	mgList.push({name:'Kitsune-bi', url:'/wiki/Kitsune-bi', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Kitsune-tsuki', url:'/wiki/Kitsune-tsuki', type:'Majin', family:'Majin'});
	mgList.push({name:'Yuki-Onna', url:'/wiki/Yuki-Onna', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Gyoubu Danuki', url:'/wiki/Gyoubu_Danuki', type:'Beastman', family:'Tanuki'});
	mgList.push({name:'Alice', url:'/wiki/Alice', type:'Demon', family:'Succubus'});
	mgList.push({name:'Amazoness', url:'/wiki/Amazoness', type:'Demon', family:'Succubus'});
	mgList.push({name:'Angel', url:'/wiki/Angel', type:'Angel', family:'Angel'});
	mgList.push({name:'Dark Angel', url:'/wiki/Dark_Angel', type:'Angel', family:'Angel'});
	mgList.push({name:'Wyvern', url:'/wiki/Wyvern', type:'Reptile', family:'Dragon'});
	mgList.push({name:'Baphomet', url:'/wiki/Baphomet', type:'Demon_Beast', family:'Baphomet'});
	mgList.push({name:'Witch', url:'/wiki/Witch', type:'Majin', family:'Majin'});
	mgList.push({name:'Imp', url:'/wiki/Imp', type:'Demon', family:'Imp'});
	mgList.push({name:'Arch Imp', url:'/wiki/Arch_Imp', type:'Demon', family:'Imp'});
	mgList.push({name:'Fairy', url:'/wiki/Fairy', type:'Fairy', family:'Succubus'});
	mgList.push({name:'Pixie', url:'/wiki/Pixie', type:'Fairy', family:'Imp'});
	mgList.push({name:'Leanan Sidhe', url:'/wiki/Leanan_Sidhe', type:'Fairy', family:'Succubus'});
	mgList.push({name:'Elf', url:'/wiki/Elf', type:'Elf', family:'Succubus'});
	mgList.push({name:'Dark Elf', url:'/wiki/Dark_Elf', type:'Elf', family:'Succubus'});
	mgList.push({name:'Dwarf', url:'/wiki/Dwarf', type:'Dwarf', family:'Succubus'});
	mgList.push({name:'Cyclops', url:'/wiki/Cyclops', type:'Ex-Giant', family:'Ex-Giant'});
	mgList.push({name:'Centaur', url:'/wiki/Centaur', type:'Beastman', family:'Centaur'});
	mgList.push({name:'Unicorn', url:'/wiki/Unicorn', type:'Beastman', family:'Centaur'});
	mgList.push({name:'Nightmare', url:'/wiki/Nightmare', type:'Beastman', family:'Centaur'});
	mgList.push({name:'Bicorn', url:'/wiki/Bicorn', type:'Beastman', family:'Centaur'});
	mgList.push({name:'Dark Matter', url:'/wiki/Dark_Matter', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Mandragora', url:'/wiki/Mandragora', type:'Plant', family:'Mandragora'});
	mgList.push({name:'Ignis', url:'/wiki/Ignis', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Gnome', url:'/wiki/Gnome', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Sylph', url:'/wiki/Sylph', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Undine', url:'/wiki/Undine', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Mimic', url:'/wiki/Mimic', type:'Shapeshifter', family:'Mimic'});
	mgList.push({name:'Jinn of the Jar', url:'/wiki/Jinn_of_the_Jar', type:'Shapeshifter', family:'Mimic'});
	mgList.push({name:'Charybdis', url:'/wiki/Charybdis', type:'Shapeshifter', family:'Mimic'});
	mgList.push({name:'Scylla', url:'/wiki/Scylla', type:'Mollusc', family:'Scylla'});
	mgList.push({name:'Kraken', url:'/wiki/Kraken', type:'Mollusc', family:'Scylla'});
	mgList.push({name:'Kesaran Pasaran', url:'/wiki/Kesaran_Pasaran', type:'Plant', family:'Mandragora'});
	mgList.push({name:'Giant Slug', url:'/wiki/Giant_Slug', type:'Mollusc', family:'Shell'});
	mgList.push({name:'Ghoul', url:'/wiki/Ghoul', type:'Undead', family:'Zombie'});
	mgList.push({name:'Lich', url:'/wiki/Lich', type:'Undead', family:'Zombie'});
	mgList.push({name:'Orc', url:'/wiki/Orc', type:'Beastman', family:'Orc'});
	mgList.push({name:'Large Mouse', url:'/wiki/Large_Mouse', type:'Beastman', family:'Mouse'});
	mgList.push({name:'Goblin', url:'/wiki/Goblin', type:'Demihuman', family:'Goblin'});
	mgList.push({name:'Hobgoblin', url:'/wiki/Hobgoblin', type:'Demihuman', family:'Goblin'});
	mgList.push({name:'Dryad', url:'/wiki/Dryad', type:'Plant', family:'Dryad'});
	mgList.push({name:'Roper', url:'/wiki/Roper', type:'Tentacle', family:'Roper'});
	mgList.push({name:'Nereid', url:'/wiki/Nereid', type:'Aquatic', family:'Succubus'});
	mgList.push({name:'Mermaid', url:'/wiki/Mermaid', type:'Fish', family:'Mermaid'});
	mgList.push({name:'Merrow', url:'/wiki/Merrow', type:'Fish', family:'Mermaid'});
	mgList.push({name:'Sea Bishop', url:'/wiki/Sea_Bishop', type:'Fish', family:'Mermaid'});
	mgList.push({name:'Selkie', url:'/wiki/Selkie', type:'Beastman', family:'Mermaid'});
	mgList.push({name:'Dark Priest', url:'/wiki/Dark_Priest', type:'Demon', family:'Succubus'});
	mgList.push({name:'Dullahan', url:'/wiki/Dullahan', type:'Undead', family:'Dullahan'});
	mgList.push({name:'Devil Bug', url:'/wiki/Devil_Bug', type:'Bug', family:'Devil_Bug'});
	mgList.push({name:'Manticore', url:'/wiki/Manticore', type:'Demon_Beast', family:'Chimaera'});
	mgList.push({name:'Yeti', url:'/wiki/Yeti', type:'Beastman', family:'Apeman'});
	mgList.push({name:'Living Doll', url:'/wiki/Living_Doll', type:'Magic_Material', family:'Doll'});
	mgList.push({name:'Glacies', url:'/wiki/Glacies', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Alp', url:'/wiki/Alp', type:'Demon', family:'Succubus'});
	mgList.push({name:'Wererabbit', url:'/wiki/Wererabbit', type:'Beastman', family:'Rabbit'});
	mgList.push({name:'Weresheep', url:'/wiki/Weresheep', type:'Beastman', family:'Sheep'});
	mgList.push({name:'Matango', url:'/wiki/Matango', type:'Plant', family:'Matango'});
	mgList.push({name:'Beelzebub', url:'/wiki/Beelzebub', type:'Bug', family:'Fly'});
	mgList.push({name:'Wight', url:'/wiki/Wight', type:'Undead', family:'Zombie'});
	mgList.push({name:'Jinko', url:'/wiki/Jinko', type:'Beastman', family:'Tiger'});
	mgList.push({name:'Gazer', url:'/wiki/Gazer', type:'Single-Eyed_Demihuman', family:'Gazer'});
	mgList.push({name:'Parasite Slime / Slime Carrier', url:'/wiki/Parasite_Slime_/_Slime_Carrier', type:'Majin', family:'Majin'});
	mgList.push({name:'Mothman', url:'/wiki/Mothman', type:'Bug', family:'Papillon'});
	mgList.push({name:'Devil', url:'/wiki/Devil', type:'Demon', family:'Imp'});
	mgList.push({name:'Kikimora', url:'/wiki/Kikimora', type:'Beastman', family:'Wolf'});
	mgList.push({name:'Cheshire Cat', url:'/wiki/Cheshire_Cat', type:'Beastman', family:'Cat'});
	mgList.push({name:'March Hare', url:'/wiki/March_Hare', type:'Beastman', family:'Rabbit'});
	mgList.push({name:'Dormouse', url:'/wiki/Dormouse', type:'Beastman', family:'Mouse'});
	mgList.push({name:'Mad Hatter', url:'/wiki/Mad_Hatter', type:'Majin', family:'Matango'});
	mgList.push({name:'Jabberwock', url:'/wiki/Jabberwock', type:'Reptile', family:'Dragon'});
	mgList.push({name:'Cancer', url:'/wiki/Cancer', type:'Crustacean', family:'Cancer'});
	mgList.push({name:'Lava Golem', url:'/wiki/Lava_Golem', type:'Magic_Material', family:'Golem'});
	mgList.push({name:'Tentacle', url:'/wiki/Tentacle', type:'Plant', family:'Tentacle'});
	mgList.push({name:'Valkyrie', url:'/wiki/Valkyrie', type:'Angel', family:'Angel'});
	mgList.push({name:'Dark Valkyrie', url:'/wiki/Dark_Valkyrie', type:'Angel', family:'Angel'});
	mgList.push({name:'Familiar', url:'/wiki/Familiar', type:'Demon_Beast', family:'Chimaera'});
	mgList.push({name:'Troll', url:'/wiki/Troll', type:'Demihuman', family:'Troll'});
	mgList.push({name:'Liliraune', url:'/wiki/Liliraune', type:'Plant', family:'Alraune'});
	mgList.push({name:'Karakasa-Obake', url:'/wiki/Karakasa-Obake', type:'Magic_Material', family:'Tsukumogami'});
	mgList.push({name:'Kejourou', url:'/wiki/Kejourou', type:'Majin', family:'Succubus'});
	mgList.push({name:'Akaname', url:'/wiki/Akaname', type:'Majin', family:'Temptress'});
	mgList.push({name:'Chimaera', url:'/wiki/Chimaera', type:'Demon_Beast', family:'Chimaera'});
	mgList.push({name:'Hinezumi', url:'/wiki/Hinezumi', type:'Beastman', family:'Mouse'});
	mgList.push({name:'Ren Xiongmao', url:'/wiki/Ren_Xiongmao', type:'Beastman', family:'Bear'});
	mgList.push({name:'Hellhound', url:'/wiki/Hellhound', type:'Beastman', family:'Wolf'});
	mgList.push({name:'Barometz', url:'/wiki/Barometz', type:'Plant', family:'Alraune'});
	mgList.push({name:'Gandharva', url:'/wiki/Gandharva', type:'Birdman', family:'Harpy'});
	mgList.push({name:'Apsara', url:'/wiki/Apsara', type:'Aquatic', family:'Spirit'});
	mgList.push({name:'Cait Sith', url:'/wiki/Cait_Sith', type:'Beastman', family:'Cat'});
	mgList.push({name:'Will-o-the-Wisp', url:'/wiki/Will-o-the-Wisp', type:'Undead', family:'Ghost'});
	mgList.push({name:'Kakuen', url:'/wiki/Kakuen', type:'Beastman', family:'Apeman'});
	mgList.push({name:'Houri', url:'/wiki/Houri', type:'Angel', family:'Angel'});
	mgList.push({name:'Cupid', url:'/wiki/Cupid', type:'Angel', family:'Angel'});
	mgList.push({name:'Mindflayer', url:'/wiki/Mindflayer', type:'Mollusc', family:'Scylla'});
	mgList.push({name:'Wendigo', url:'/wiki/Wendigo', type:'Beastman', family:'Wendigo'});
	mgList.push({name:'Shoggoth', url:'/wiki/Shoggoth', type:'Semiliquid', family:'Slime'});
	mgList.push({name:'Kobold', url:'/wiki/Kobold', type:'Beastman', family:'Wolf'});
	mgList.push({name:'Soldier Beetle', url:'/wiki/Soldier_Beetle', type:'Bug', family:'Beetle'});
	mgList.push({name:'Mucus Toad', url:'/wiki/Mucus_Toad', type:'Amphibian', family:'Toad'});
	mgList.push({name:'Demon', url:'/wiki/Demon', type:'Demon', family:'Succubus'});
	mgList.push({name:'Titania', url:'/wiki/Titania', type:'Fairy', family:'Succubus'});
	mgList.push({name:'Jiangshi', url:'/wiki/Jiangshi', type:'Undead', family:'Zombie'});
	mgList.push({name:'Jubjub', url:'/wiki/Jubjub', type:'Birdman', family:'Harpy'});
	mgList.push({name:'Humpty Egg', url:'/wiki/Humpty_Egg', type:'Semiliquid', family:'Slime'});
	mgList.push({name:'Raiju', url:'/wiki/Raiju', type:'Beastman', family:'Weasel'});
	mgList.push({name:'Vamp Mosquito', url:'/wiki/Vamp_Mosquito', type:'Bug', family:'Fly'});
	mgList.push({name:'Cu Sith', url:'/wiki/Cu_Sith', type:'Beastman', family:'Wolf'});
	mgList.push({name:'Satyros', url:'/wiki/Satyros', type:'Beastman', family:'Satyros'});
	mgList.push({name:'Flow Kelp', url:'/wiki/Flow_Kelp', type:'Plant', family:'Mandragora'});
	mgList.push({name:'Hakutaku', url:'/wiki/Hakutaku', type:'Beastman', family:'Minotaur'});
	mgList.push({name:'Basilisk', url:'/wiki/Basilisk', type:'Reptile', family:'Lamia'});
	mgList.push({name:'Living Armor', url:'/wiki/Living_Armor', type:'Magic_Material', family:'Armor'});
	mgList.push({name:'Cursed Sword', url:'/wiki/Cursed_Sword', type:'Magic_Material', family:'Sword_Devil'});
	mgList.push({name:'Ittan-momen', url:'/wiki/Ittan-momen', type:'Magic_Material', family:'Ittan-momen'});
	mgList.push({name:'Griffon', url:'/wiki/Griffon', type:'Demon_Beast', family:'Griffon'});
	mgList.push({name:'White Horn', url:'/wiki/White_Horn', type:'Beastman', family:'Centaur'});
	mgList.push({name:'Ice Queen', url:'/wiki/Ice_Queen', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Dark Mage', url:'/wiki/Dark_Mage', type:'Majin', family:'Majin'});
	mgList.push({name:'Trumpart', url:'/wiki/Trumpart', type:'Majin', family:'Majin'});
	mgList.push({name:'Dragon Zombie', url:'/wiki/Dragon_Zombie', type:'Undead', family:'Dragon'});
	mgList.push({name:'Automaton', url:'/wiki/Automaton', type:'Magic_Material', family:'Golem'});
	mgList.push({name:'Gremlin', url:'/wiki/Gremlin', type:'Demon', family:'Imp'});
	mgList.push({name:'Atlach-Nacha', url:'/wiki/Atlach-Nacha', type:'Bug', family:'Arachne'});
	mgList.push({name:'Kamaitachi', url:'/wiki/Kamaitachi', type:'Beastman', family:'Weasel'});
	mgList.push({name:'Ochimusha', url:'/wiki/Ochimusha', type:'Undead', family:'Zombie'});
	mgList.push({name:'Otohime', url:'/wiki/Otohime', type:'Mermaid', family:'Dragon'});
	mgList.push({name:'Nurarihyon', url:'/wiki/Nurarihyon', type:'Majin', family:'Temptress'});
	mgList.push({name:'Redcap', url:'/wiki/Redcap', type:'Demihuman', family:'Goblin'});
	mgList.push({name:'Phantom', url:'/wiki/Phantom', type:'Undead', family:'Ghost'});
	mgList.push({name:'Mershark', url:'/wiki/Mershark', type:'Fish', family:'Mermaid'});
	mgList.push({name:'Ratatoskr', url:'/wiki/Ratatoskr', type:'Beastman', family:'Squirrel'});
	mgList.push({name:'Tritonia', url:'/wiki/Tritonia', type:'Mollusc', family:'Shell'});
	mgList.push({name:'Night Gaunt', url:'/wiki/Night_Gaunt', type:'Demon', family:'Succubus'});
	mgList.push({name:'High Orc', url:'/wiki/High_Orc', type:'Beastman', family:'Orc'});
	mgList.push({name:'Greenworm', url:'/wiki/Greenworm', type:'Bug', family:'Worm'});
	mgList.push({name:'Papillon', url:'/wiki/Papillon', type:'Bug', family:'Papillon'});
	mgList.push({name:'Bunyip', url:'/wiki/Bunyip', type:'Reptile', family:'Lamia'});
	mgList.push({name:'Dorome', url:'/wiki/Dorome', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Owl Mage', url:'/wiki/Owl_Mage', type:'Birdman', family:'Harpy'});
	mgList.push({name:'Tsurara-onna', url:'/wiki/Tsurara-onna', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Genie', url:'/wiki/Genie', type:'Elemental', family:'Spirit'});
	mgList.push({name:'Banshee', url:'/wiki/Banshee', type:'Undead', family:'Succubus'});
	mgList.push({name:'Myconid', url:'/wiki/Myconid', type:'Plant', family:'Matango'});
	mgList.push({name:'Ocelomeh', url:'/wiki/Ocelomeh', type:'Beastman', family:'Cat'});
	mgList.push({name:'Wonderworm', url:'/wiki/Wonderworm', type:'Bug', family:'Worm'});
	mgList.push({name:'Unagi Joro', url:'/wiki/Unagi_Joro', type:'Mermaid', family:'Mermaid'});
	mgList.push({name:'Umi Osho', url:'/wiki/Umi_Osho', type:'Aquatic', family:'Turtle'});
	mgList.push({name:'Creeping Coin', url:'/wiki/Creeping_Coin', type:'Shapeshifter', family:'Mimic'});
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
	init();
});

client.on('message', msg => {
	var strMessage = msg.content;
	if (strMessage.startsWith("/mg")) {
		var mamonoName = strMessage.substring(4);
		var messageRes;
		var objRes;
		
		if(mamonoName == null || mamonoName.length <=1){
			//Message when empty
		}
		else if(mamonoName == "help"){
			//Random Mamono
			messageRes = "```List of commands : "
				+"\n - /mg [Name of the Mamono] get the wikia page of the mamono"
				+"\n - /mg rnd get a wikia page of a random mamono"
				+"\n - /mg rnd [category] get a wikia page of a random mamono from this type or family"
				+"```";
		}
		else if(mamonoName == "rnd"){
			//Random Mamono
			objRes = mgList[Math.floor(Math.random () * mgList.length)];
		}
		else if(mamonoName.startsWith("rnd")){
			//Random Mamono in a category
			var listFilteredMamono;
			var categoryName = mamonoName.substring(4);
			if(categoryName== null || categoryName.length<=1)
			{
				//Message when bad category
				//messageRes = "No category";
			}
			else{
				listFilteredMamono = mgList.filter(
					obj => obj.type.toLowerCase() == categoryName.toLowerCase() 
						|| obj.family.toLowerCase() == categoryName.toLowerCase());
				
				if(listFilteredMamono == null || listFilteredMamono.length ==0){
					//Message when bad category
					//messageRes = "Bad category";
				}
				else{
					//Random Mamono in the elligible list
					objRes = listFilteredMamono[Math.floor(Math.random () * listFilteredMamono.length)];
				}
			}
		}
		else{
			objRes = mgList.find(obj => obj.name.toLowerCase() == mamonoName.toLowerCase());
		}
		
		if(objRes !=null){
			messageRes = wikiaBasicLink + objRes.url;
		}
		
		if(messageRes){
			msg.channel.send(messageRes);
		}
	}
});

client.login(process.env.DISCORD_TOKEN);
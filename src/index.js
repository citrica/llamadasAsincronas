import "./styles.css";
import * as CharacterData from "./data-business";
import * as Utils from "./utils";

CharacterData.getCharacters().then((characters) => {
    const nodes = new Array();
    for (let character of characters) { // Recorrer todos los personajes y mostrar la información del avatar y nombre
        const node = Utils.createCharacterRow(character);
        node.onclick = function() { // Mostrar más datos del personaje al hacer click en él
            Utils.showCharacter(character);
        };
        nodes.push(node);
    }
    for (let node of nodes) {
        document.getElementById("root").append(node);
    }
});
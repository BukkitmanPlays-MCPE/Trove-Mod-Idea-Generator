var strings = stringData

function generateIdea() {
    var finalIdea = "A ";

    var amount = Math.floor((Math.random() * 3) + 0);

    var i;
    for (i = 0; i < amount; i++) { 
        var pickerNumber = Math.floor((Math.random() * 2) + 1);

        if(pickerNumber == 2) {
            var pickerNumber = Math.floor((Math.random() * strings.colors.length) + 1);

            finalIdea = finalIdea + (strings.colors[pickerNumber-1] + " ");
        } else {
            var pickerNumber = Math.floor((Math.random() * strings.textures.length) + 1);

            finalIdea = finalIdea + (strings.textures[pickerNumber-1] + " ");
        }
    }

    pickerNumber = Math.floor((Math.random() * strings.theme.length) + 1);

    if (pickerNumber <= strings.theme.length) {
        finalIdea = finalIdea + (strings.theme[pickerNumber-1] + " themed mod for a ");
    }

    var chance = Math.floor((Math.random() * strings.objectNames.length) + 1);
    var modType;

    if (chance == 1) {
        pickerNumber = Math.floor((Math.random() * strings.modtype[0].length) + 1);
        modType = 1;

        finalIdea = finalIdea + (strings.modtype[0][pickerNumber-1]+ " " + strings.objectNames[0]);
    } else if (chance == 2) {
        pickerNumber = Math.floor((Math.random() * strings.modtype[1].length) + 1);

        finalIdea = finalIdea + (strings.modtype[1][pickerNumber-1]+ " " + strings.objectNames[1]);
    } else {
        finalIdea = finalIdea + (strings.objectNames[chance-1]);
    }

    var chance = Math.floor((Math.random() * 2) + 1);

    if (chance == 2 && modType == 1) {
        finalIdea = finalIdea + " that includes: ";
        amount = Math.floor((Math.random() * 3) + 1);

        for (i = 0; i < amount; i++) {
            pickerNumber = Math.floor((Math.random() * strings.includings.length) + 1);

            finalIdea = finalIdea + (strings.includings[pickerNumber-1] + ", ");
        }
    }

    document.getElementById("result").innerHTML = finalIdea;
}
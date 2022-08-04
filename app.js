
let pronouns = ["the", "that", "my"]
let adj = ["big", "heavy", "smart"]
let nouns = ["tomato", "freezer", "laptop"]

for (i=0; i<pronouns.length; i++) {
    for (j=0; j<adj.length; j++) {
        for (k=0; k<nouns.length; k++) {
            console.log(pronouns[i] + adj[j] + nouns[k] + ".com")
        }
    }
} 


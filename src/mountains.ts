export interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    {name: "Kilimanjaro",
    height: 19341
    },
    {name: "Everest",
    height: 29029
    },
    {name: "Denali",
    height: 20310
    }
];

export function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallestHeight: number = 0;
    let tallestName: string = "";
    for(let i=0; i < mountains.length; i++){
        if(mountains[i].height > tallestHeight){
            tallestHeight = mountains[i].height;
            tallestName = mountains[i].name;
        }
    }
    
    return tallestName;
};

let tallestMountain: string = findNameOfTallestMountain(mountains);

console.log(tallestMountain);
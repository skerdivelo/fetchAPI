const W = 600;
const H = 600;

const TILE_SIZE = 100;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = W;
canvas.height = H;

const drawText = (txt, x, y) => {
    ctx.font = '48px serif';
    ctx.fillText(txt, x, y);
};

const shuffle = (arr) => {
    let i = 0,j = 0, tmp = null;
    for (i = arr.length - 1; i>0;i--){
        j = Math.floor(Math.random() * (i+1));
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
};

const swap = (arr, i, j) => {
    let tmp = null;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

const tiles = [];
const tilespos = [];
const emptyPos = 15;
for (let i = 0; i < 15; i++) {
    tiles.push(new Tile(i));
    tilespos.push(i);
}

shuffle(tilespos);
swap(tilespos, 0, 1);

const idxToCoords = (idx) => {
    return { r: TILE_SIZE * Math.floor(idx / 4), c: TILE_SIZE * (idx % 4) };
};

const show = () => {
    ctx.clearRect(0, 0, W, H);
    tilespos.forEach((tilepos, idx) => {
        const { r, c } = idxToCoords(idx);
        drawText(tiles[tilepos].getNum(), c+0.5*TILE_SIZE, r+0.5*TILE_SIZE);
    });

    requestAnimationFrame(show);
};

show();

const moves = [
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },
    {
        ArrowLeft: () => {},
        ArrowUp: () => {},
        ArrowDown: () => {},
        ArrowRight: () => {}
    },

];

document.body.onkeydown = (e) => {
    if(e.code === "ArrowLeft"){
        console.log("left");
    }else if(e.code === "ArrowRight"){
        console.log("right");
    }else if(e.code === "ArrowUp"){
        console.log("up");
    }else if(e.code === "ArrowDown"){
        /* switch (emptyPos) {
            case 1: 
                break;
        } */
        moves[emptyPos][e.code]();
    }
}
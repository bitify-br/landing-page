var SquareGrid = document.getElementById('square-grid');

if (!getComputedStyle) {
	throw new Error('Computed style not implemented');
}

const SquareGridCs = getComputedStyle(SquareGrid);
var GridHeight = parseFloat(SquareGrid.offsetHeight) - parseFloat(SquareGridCs.paddingTop);
var GridWidth = parseFloat(SquareGrid.offsetWidth) - parseFloat(SquareGridCs.paddingLeft);

const DefaultGridCollums = 16
const DefaultGridRows = 4
var SquareHeight = GridHeight / DefaultGridRows
var SquareWidth = GridWidth / DefaultGridCollums

const grid = [...Array(DefaultGridCollums)].map(e => Array(DefaultGridRows));

for (let i=0; i < DefaultGridCollums;i++) {
   for(let j=0; j < DefaultGridRows;j++) {
      let SquareState = Math.floor(Math.random() * 3);
      // 0 preto 1 branco 2 azul
      let Square = document.createElement("div");
      grid[i][j] = { state: SquareState, element: Square };
      Square.style.position = "absolute"
      Square.style.width = `${SquareWidth}px`
      Square.style.height = `${SquareHeight}px`
      Square.style.padding = '6px'
      Square.style.backgroundClip = 'content-box'
      Square.style.transition = 'all .3s ease-in-out'
      switch(SquareState) {
        case 0:
	  Square.style.backgroundColor = "none"
          break
        case 1:
	  Square.style.backgroundColor = "white"
          break
        case 2:
	  Square.style.backgroundColor = "blue"
          break
      }
      Square.style.top = `${j * SquareHeight}px`
      Square.style.left = `${i * SquareWidth}px`

      SquareGrid.appendChild(Square)
   }
}

setInterval(() => {
	const randomColumn = Math.floor(Math.random() * DefaultGridCollums);
	const randomRow = Math.floor(Math.random() * DefaultGridRows);

	const item = grid[randomColumn][randomRow];

	if (item && item.state !== 0) {
		if (!tryToMoveBlockHorizontally(item, randomColumn, randomRow)) {
			tryToMoveBlockVertically(item, randomColumn, randomRow);
		}
		
	}
}, 20);

function tryToMoveBlockHorizontally(item, x, y) {
	if(grid[x + 1] && grid[x + 1][y] && grid[x + 1][y].state === 0) {
		if(x === DefaultGridCollums - 1) {
			return false;
		}

		item.element.style.left = `${parseFloat(item.element.style.left) + SquareWidth}px`;
		grid[x + 1][y] = item;
		grid[x][y] = { state: 0, item: undefined };
		return true;
	}
	if(grid[x - 1] && grid[x - 1][y] && grid[x -1 ][y].state === 0) {
		if( x === 0) {
			return false;
		}

		item.element.style.left = `${parseFloat(item.element.style.left) - SquareWidth}px`;
		grid[x - 1][y] = item;
		grid[x][y] = { state: 0, item: undefined };
		return true;
	}
	return false;
}
   
function tryToMoveBlockVertically(item, x, y) {
	if(grid[x] && grid[x][y + 1] && grid[x][y + 1].state === 0) {
		if (y === 0) {
			return false;
		}

		item.element.style.top = `${parseFloat(item.element.style.top) + SquareHeight}px`;
		grid[x][y + 1] = item;
		grid[x][y] = { state: 0, item: undefined };
		return true;
	}
	if(grid[x] && grid[x][y - 1] && grid[x][y - 1].state === 0) {
		if (y === DefaultGridRows - 1) {
			return false;
		}
		item.element.style.top = `${parseFloat(item.element.style.top) - SquareHeight}px`;
		grid[x][y - 1] = item;
		grid[x][y] = { state: 0, item: undefined };
		return true;
	}
	return false;
}

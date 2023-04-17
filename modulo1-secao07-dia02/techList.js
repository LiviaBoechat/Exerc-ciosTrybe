// techList.js
const techList = (arrayTechnologies, nomeDaPessoa) => {
    if (arrayTechnologies.length === 0) return 'Vazio!';
  
    const sortedArray = arrayTechnologies.sort();
    const technologyList = [];
  
    for (let index = 0; index < sortedArray.length; index += 1) {
      technologyList.push({
        tech: sortedArray[index],
        name: nomeDaPessoa,
      });
    }
  
    return technologyList;
  };
  
  module.exports = techList;
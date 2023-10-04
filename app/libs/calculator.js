const mathParams = ['+', '-', '*', '/', '.', '%'];

const instrumentPanel = document.getElementById("instrumentPanel");

const printDigit = (mathParam) => instrumentPanel.value += mathParam

const clearInstrumentPanel = () => instrumentPanel.value = ''

const saveToLocalStorage = () => localStorage.setItem('result', instrumentPanel.value)

const withdrawFromLocalStorage = () => printDigit(localStorage.getItem('result'))

const exampleSolution = () => instrumentPanel.value = math.evaluate(instrumentPanel.value)

const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.querySelector('body').className = themeName;
}

const toggleTheme = () => {
  const theme = localStorage.getItem('theme') === 'theme-second' ? 'theme-one' : 'theme-second';
  setTheme(theme);
};

const changeParams = (mathParam) => {
  if (mathParam === '+/-') {
    const firstDigit = instrumentPanel.value[0];
    instrumentPanel.value = (firstDigit === '-') ? instrumentPanel.value.slice(1) : '-' + instrumentPanel.value;
  } else if (!mathParams.includes(instrumentPanel.value.slice(-1)) && instrumentPanel.value.length > 0) {
    instrumentPanel.value += mathParam;
  }
}

setTheme('theme-one');

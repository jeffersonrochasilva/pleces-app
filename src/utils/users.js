export const funLoading = (load) => {
  setTimeout(() => {
    load = !load;
    alert('teste',load.value);
  }, 3000);
}
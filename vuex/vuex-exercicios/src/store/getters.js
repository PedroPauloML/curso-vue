export const getNome = (state) => state.nome;
export const getSobrenome = (state) => state.sobrenome;
export const getNomeCompleto = (state) => `${state.nome} ${state.sobrenome}`;

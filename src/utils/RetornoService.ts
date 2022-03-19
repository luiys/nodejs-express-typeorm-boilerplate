export class RetornoService {

	public static success<T>(result: T[] | T) {

		let Return = {
			flagErro: false,
			listaMensagens: [],
			listaResultados: result
		}

		return Return;

	}

	public static error(error: unknown) {

		let Return = {
			flagErro: true,
			listaMensagens: [] as string[],
			listaResultados: []
		}

		Return.listaMensagens = error instanceof Error ? [error.message] : [error as string];
		return Return;

	}

	public static message(msg: string) {

		let Return = {
			flagErro: true,
			listaMensagens: [] as string[],
			listaResultados: []
		}

		Return.listaMensagens.push(msg)
		return Return;

	}

}
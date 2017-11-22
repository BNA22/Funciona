package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;

@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Fonte {

	public static final int TIMEOUT = 300;

	/**
	 *
	 * @return Var
	 */
	// fonte
	public static Var Executar() throws Exception {
		return new Callable<Var>() {

			private Var item = Var.VAR_NULL;

			public Var call() throws Exception {
				item = cronapi.database.Operations.query(Var.valueOf("app.entity.User"),
						Var.valueOf("select u.name from User u"), Var.VAR_NULL);
				System.out.println(item.getObjectAsString());
				return Var.VAR_NULL;
			}
		}.call();
	}

}

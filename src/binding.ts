/**
 * @author WMXPY
 * @description Binding
 */

import * as ModuleAlias from 'module-alias';
import * as Path from 'path';

((MODULE_ALIAS: string | undefined, isTest: boolean) => {
    if (MODULE_ALIAS) return; else process.env.NODE_MODULE_ALIAS_SUDOO_PENCIL = 'TRUE';
    const here: string = isTest ?
        Path.join(__dirname) :
        Path.join(__dirname, '..', 'dist');

    ModuleAlias.addAliases({
        "sudoo-pencil#declare": Path.join(here, 'declare'),
        "sudoo-pencil#pencil": Path.join(here, 'pencil'),
        "sudoo-pencil#util": Path.join(here, 'util'),
    });
})(process.env.NODE_MODULE_ALIAS_SUDOO_PENCIL, process.env.NODE_ENV === 'test');

(function() {var implementors = {};
implementors["base_db"] = [{"text":"impl QueryGroup for SourceDatabaseStorage","synthetic":false,"types":[]},{"text":"impl QueryGroup for SourceDatabaseExtStorage","synthetic":false,"types":[]}];
implementors["hir_def"] = [{"text":"impl QueryGroup for InternDatabaseStorage","synthetic":false,"types":[]},{"text":"impl QueryGroup for DefDatabaseStorage","synthetic":false,"types":[]}];
implementors["hir_expand"] = [{"text":"impl QueryGroup for AstDatabaseStorage","synthetic":false,"types":[]}];
implementors["hir_ty"] = [{"text":"impl QueryGroup for HirDatabaseStorage","synthetic":false,"types":[]}];
implementors["ide_db"] = [{"text":"impl QueryGroup for SymbolsDatabaseStorage","synthetic":false,"types":[]},{"text":"impl QueryGroup for LineIndexDatabaseStorage","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
(function() {var implementors = {};
implementors["base_db"] = [{"text":"impl From&lt;CrateName&gt; for CrateDisplayName","synthetic":false,"types":[]}];
implementors["cfg"] = [{"text":"impl From&lt;CfgAtom&gt; for CfgExpr","synthetic":false,"types":[]}];
implementors["hir"] = [{"text":"impl From&lt;CrateId&gt; for Crate","synthetic":false,"types":[]},{"text":"impl From&lt;Crate&gt; for CrateId","synthetic":false,"types":[]},{"text":"impl From&lt;ModuleId&gt; for Module","synthetic":false,"types":[]},{"text":"impl From&lt;Module&gt; for ModuleId","synthetic":false,"types":[]},{"text":"impl From&lt;StructId&gt; for Struct","synthetic":false,"types":[]},{"text":"impl From&lt;Struct&gt; for StructId","synthetic":false,"types":[]},{"text":"impl From&lt;UnionId&gt; for Union","synthetic":false,"types":[]},{"text":"impl From&lt;Union&gt; for UnionId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumId&gt; for Enum","synthetic":false,"types":[]},{"text":"impl From&lt;Enum&gt; for EnumId","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAliasId&gt; for TypeAlias","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAlias&gt; for TypeAliasId","synthetic":false,"types":[]},{"text":"impl From&lt;TraitId&gt; for Trait","synthetic":false,"types":[]},{"text":"impl From&lt;Trait&gt; for TraitId","synthetic":false,"types":[]},{"text":"impl From&lt;StaticId&gt; for Static","synthetic":false,"types":[]},{"text":"impl From&lt;Static&gt; for StaticId","synthetic":false,"types":[]},{"text":"impl From&lt;ConstId&gt; for Const","synthetic":false,"types":[]},{"text":"impl From&lt;Const&gt; for ConstId","synthetic":false,"types":[]},{"text":"impl From&lt;FunctionId&gt; for Function","synthetic":false,"types":[]},{"text":"impl From&lt;Function&gt; for FunctionId","synthetic":false,"types":[]},{"text":"impl From&lt;ImplId&gt; for Impl","synthetic":false,"types":[]},{"text":"impl From&lt;Impl&gt; for ImplId","synthetic":false,"types":[]},{"text":"impl From&lt;TypeParamId&gt; for TypeParam","synthetic":false,"types":[]},{"text":"impl From&lt;TypeParam&gt; for TypeParamId","synthetic":false,"types":[]},{"text":"impl From&lt;LifetimeParamId&gt; for LifetimeParam","synthetic":false,"types":[]},{"text":"impl From&lt;LifetimeParam&gt; for LifetimeParamId","synthetic":false,"types":[]},{"text":"impl From&lt;ConstParamId&gt; for ConstParam","synthetic":false,"types":[]},{"text":"impl From&lt;ConstParam&gt; for ConstParamId","synthetic":false,"types":[]},{"text":"impl From&lt;MacroDefId&gt; for MacroDef","synthetic":false,"types":[]},{"text":"impl From&lt;MacroDef&gt; for MacroDefId","synthetic":false,"types":[]},{"text":"impl From&lt;AdtId&gt; for Adt","synthetic":false,"types":[]},{"text":"impl From&lt;Adt&gt; for AdtId","synthetic":false,"types":[]},{"text":"impl From&lt;GenericParamId&gt; for GenericParam","synthetic":false,"types":[]},{"text":"impl From&lt;GenericParam&gt; for GenericParamId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumVariantId&gt; for Variant","synthetic":false,"types":[]},{"text":"impl From&lt;Variant&gt; for EnumVariantId","synthetic":false,"types":[]},{"text":"impl From&lt;ModuleDefId&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;ModuleDef&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;DefWithBody&gt; for DefWithBodyId","synthetic":false,"types":[]},{"text":"impl From&lt;DefWithBodyId&gt; for DefWithBody","synthetic":false,"types":[]},{"text":"impl From&lt;AssocItemId&gt; for AssocItem","synthetic":false,"types":[]},{"text":"impl From&lt;GenericDef&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;GenericDefId&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;Adt&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;VariantId&gt; for VariantDef","synthetic":false,"types":[]},{"text":"impl From&lt;VariantDef&gt; for VariantId","synthetic":false,"types":[]},{"text":"impl From&lt;Field&gt; for FieldId","synthetic":false,"types":[]},{"text":"impl From&lt;FieldId&gt; for Field","synthetic":false,"types":[]},{"text":"impl From&lt;AssocItem&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;(DefWithBodyId, Idx&lt;Pat&gt;)&gt; for Local","synthetic":false,"types":[]},{"text":"impl From&lt;(DefWithBodyId, Idx&lt;Label&gt;)&gt; for Label","synthetic":false,"types":[]},{"text":"impl From&lt;MacroDef&gt; for ItemInNs","synthetic":false,"types":[]},{"text":"impl From&lt;ModuleDef&gt; for ItemInNs","synthetic":false,"types":[]},{"text":"impl From&lt;BuiltinType&gt; for BuiltinType","synthetic":false,"types":[]},{"text":"impl From&lt;BuiltinType&gt; for BuiltinType","synthetic":false,"types":[]},{"text":"impl From&lt;Module&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Function&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Adt&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Struct&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Enum&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Union&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Variant&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Const&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Static&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Trait&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAlias&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;BuiltinType&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;VariantDef&gt; for ModuleDef","synthetic":false,"types":[]},{"text":"impl From&lt;Struct&gt; for Adt","synthetic":false,"types":[]},{"text":"impl From&lt;Union&gt; for Adt","synthetic":false,"types":[]},{"text":"impl From&lt;Enum&gt; for Adt","synthetic":false,"types":[]},{"text":"impl From&lt;Struct&gt; for VariantDef","synthetic":false,"types":[]},{"text":"impl From&lt;Union&gt; for VariantDef","synthetic":false,"types":[]},{"text":"impl From&lt;Variant&gt; for VariantDef","synthetic":false,"types":[]},{"text":"impl From&lt;Function&gt; for DefWithBody","synthetic":false,"types":[]},{"text":"impl From&lt;Const&gt; for DefWithBody","synthetic":false,"types":[]},{"text":"impl From&lt;Static&gt; for DefWithBody","synthetic":false,"types":[]},{"text":"impl From&lt;Mutability&gt; for Access","synthetic":false,"types":[]},{"text":"impl From&lt;Function&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;Adt&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;Struct&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;Enum&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;Union&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;Trait&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAlias&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;Impl&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;Variant&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;Const&gt; for GenericDef","synthetic":false,"types":[]},{"text":"impl From&lt;TypeParam&gt; for GenericParam","synthetic":false,"types":[]},{"text":"impl From&lt;LifetimeParam&gt; for GenericParam","synthetic":false,"types":[]},{"text":"impl From&lt;ConstParam&gt; for GenericParam","synthetic":false,"types":[]},{"text":"impl From&lt;ItemInNs&gt; for ScopeDef","synthetic":false,"types":[]}];
implementors["hir_def"] = [{"text":"impl From&lt;Documentation&gt; for String","synthetic":false,"types":[]},{"text":"impl From&lt;Name&gt; for Path","synthetic":false,"types":[]},{"text":"impl From&lt;Name&gt; for ModPath","synthetic":false,"types":[]},{"text":"impl From&lt;ModItem&gt; for AttrOwner","synthetic":false,"types":[]},{"text":"impl From&lt;Idx&lt;Variant&gt;&gt; for AttrOwner","synthetic":false,"types":[]},{"text":"impl From&lt;Idx&lt;Field&gt;&gt; for AttrOwner","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Import&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;ExternCrate&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Function&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Struct&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Union&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Enum&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Const&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Static&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Trait&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Impl&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;TypeAlias&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Mod&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;MacroCall&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;MacroRules&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;MacroDef&gt;&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Function&gt;&gt; for AssocItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;TypeAlias&gt;&gt; for AssocItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;Const&gt;&gt; for AssocItem","synthetic":false,"types":[]},{"text":"impl From&lt;FileItemTreeId&lt;MacroCall&gt;&gt; for AssocItem","synthetic":false,"types":[]},{"text":"impl From&lt;AssocItem&gt; for ModItem","synthetic":false,"types":[]},{"text":"impl From&lt;BinOp&gt; for BinaryOp","synthetic":false,"types":[]},{"text":"impl From&lt;LiteralKind&gt; for Literal","synthetic":false,"types":[]},{"text":"impl From&lt;ModuleId&gt; for AssocContainerId","synthetic":false,"types":[]},{"text":"impl From&lt;StructId&gt; for AdtId","synthetic":false,"types":[]},{"text":"impl From&lt;UnionId&gt; for AdtId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumId&gt; for AdtId","synthetic":false,"types":[]},{"text":"impl From&lt;TypeParamId&gt; for GenericParamId","synthetic":false,"types":[]},{"text":"impl From&lt;LifetimeParamId&gt; for GenericParamId","synthetic":false,"types":[]},{"text":"impl From&lt;ConstParamId&gt; for GenericParamId","synthetic":false,"types":[]},{"text":"impl From&lt;ModuleId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;FunctionId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;AdtId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;StructId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;UnionId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumVariantId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;ConstId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;StaticId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;TraitId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAliasId&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;BuiltinType&gt; for ModuleDefId","synthetic":false,"types":[]},{"text":"impl From&lt;FunctionId&gt; for DefWithBodyId","synthetic":false,"types":[]},{"text":"impl From&lt;ConstId&gt; for DefWithBodyId","synthetic":false,"types":[]},{"text":"impl From&lt;StaticId&gt; for DefWithBodyId","synthetic":false,"types":[]},{"text":"impl From&lt;FunctionId&gt; for AssocItemId","synthetic":false,"types":[]},{"text":"impl From&lt;ConstId&gt; for AssocItemId","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAliasId&gt; for AssocItemId","synthetic":false,"types":[]},{"text":"impl From&lt;FunctionId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;AdtId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;StructId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;UnionId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;TraitId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAliasId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;ImplId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumVariantId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;ConstId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;AssocItemId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;ModuleId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;FieldId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;AdtId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;StructId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;UnionId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumVariantId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;StaticId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;ConstId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;FunctionId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;TraitId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAliasId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;MacroDefId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;ImplId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;GenericParamId&gt; for AttrDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumVariantId&gt; for VariantId","synthetic":false,"types":[]},{"text":"impl From&lt;StructId&gt; for VariantId","synthetic":false,"types":[]},{"text":"impl From&lt;UnionId&gt; for VariantId","synthetic":false,"types":[]}];
implementors["hir_expand"] = [{"text":"impl From&lt;FileId&gt; for HirFileId","synthetic":false,"types":[]},{"text":"impl From&lt;MacroFile&gt; for HirFileId","synthetic":false,"types":[]},{"text":"impl From&lt;LazyMacroId&gt; for MacroCallId","synthetic":false,"types":[]},{"text":"impl From&lt;EagerMacroId&gt; for MacroCallId","synthetic":false,"types":[]}];
implementors["hir_ty"] = [{"text":"impl From&lt;FnDefId&lt;Interner&gt;&gt; for InternedCallableDefId","synthetic":false,"types":[]},{"text":"impl From&lt;InternedCallableDefId&gt; for FnDefId","synthetic":false,"types":[]},{"text":"impl From&lt;OpaqueTyId&lt;Interner&gt;&gt; for InternedOpaqueTyId","synthetic":false,"types":[]},{"text":"impl From&lt;InternedOpaqueTyId&gt; for OpaqueTyId&lt;Interner&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;ClosureId&lt;Interner&gt;&gt; for InternedClosureId","synthetic":false,"types":[]},{"text":"impl From&lt;InternedClosureId&gt; for ClosureId&lt;Interner&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;FunctionId&gt; for CallableDefId","synthetic":false,"types":[]},{"text":"impl From&lt;StructId&gt; for CallableDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumVariantId&gt; for CallableDefId","synthetic":false,"types":[]},{"text":"impl From&lt;CallableDefId&gt; for GenericDefId","synthetic":false,"types":[]},{"text":"impl From&lt;BuiltinType&gt; for TyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;AdtId&gt; for TyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;StructId&gt; for TyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumId&gt; for TyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;UnionId&gt; for TyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAliasId&gt; for TyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;FunctionId&gt; for ValueTyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;StructId&gt; for ValueTyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;UnionId&gt; for ValueTyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;EnumVariantId&gt; for ValueTyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;ConstId&gt; for ValueTyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;StaticId&gt; for ValueTyDefId","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for HirDisplayError","synthetic":false,"types":[]}];
implementors["ide"] = [{"text":"impl From&lt;Markup&gt; for String","synthetic":false,"types":[]},{"text":"impl From&lt;String&gt; for Markup","synthetic":false,"types":[]},{"text":"impl From&lt;HlTag&gt; for Highlight","synthetic":false,"types":[]}];
implementors["ide_completion"] = [{"text":"impl From&lt;SymbolKind&gt; for CompletionItemKind","synthetic":false,"types":[]}];
implementors["ide_db"] = [{"text":"impl From&lt;Label&gt; for String","synthetic":false,"types":[]},{"text":"impl From&lt;PathResolution&gt; for Definition","synthetic":false,"types":[]},{"text":"impl From&lt;HashMap&lt;FileId, TextEdit, BuildHasherDefault&lt;FxHasher&gt;&gt;&gt; for SourceChange","synthetic":false,"types":[]},{"text":"impl From&lt;FileSystemEdit&gt; for SourceChange","synthetic":false,"types":[]}];
implementors["la_arena"] = [{"text":"impl From&lt;RawIdx&gt; for u32","synthetic":false,"types":[]},{"text":"impl From&lt;u32&gt; for RawIdx","synthetic":false,"types":[]}];
implementors["mbe"] = [{"text":"impl From&lt;ExpansionError&gt; for ExpandError","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Default&gt; From&lt;Result&lt;T, ExpandError&gt;&gt; for ExpandResult&lt;T&gt;","synthetic":false,"types":[]}];
implementors["parser"] = [{"text":"impl From&lt;u16&gt; for SyntaxKind","synthetic":false,"types":[]},{"text":"impl From&lt;SyntaxKind&gt; for u16","synthetic":false,"types":[]}];
implementors["paths"] = [{"text":"impl From&lt;AbsPathBuf&gt; for PathBuf","synthetic":false,"types":[]},{"text":"impl From&lt;RelPathBuf&gt; for PathBuf","synthetic":false,"types":[]}];
implementors["rust_analyzer"] = [{"text":"impl From&lt;SnippetWorkspaceEdit&gt; for WorkspaceEdit","synthetic":false,"types":[]},{"text":"impl From&lt;ProjectManifest&gt; for LinkedProject","synthetic":false,"types":[]},{"text":"impl From&lt;ProjectJson&gt; for LinkedProject","synthetic":false,"types":[]}];
implementors["syntax"] = [{"text":"impl&lt;N:&nbsp;AstNode&gt; From&lt;AstPtr&lt;N&gt;&gt; for SyntaxNodePtr","synthetic":false,"types":[]},{"text":"impl From&lt;TypeArg&gt; for GenericArg","synthetic":false,"types":[]},{"text":"impl From&lt;AssocTypeArg&gt; for GenericArg","synthetic":false,"types":[]},{"text":"impl From&lt;LifetimeArg&gt; for GenericArg","synthetic":false,"types":[]},{"text":"impl From&lt;ConstArg&gt; for GenericArg","synthetic":false,"types":[]},{"text":"impl From&lt;ArrayType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;DynTraitType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;FnPtrType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;ForType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;ImplTraitType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;InferType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;MacroType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;NeverType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;ParenType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;PathType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;PtrType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;RefType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;SliceType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;TupleType&gt; for Type","synthetic":false,"types":[]},{"text":"impl From&lt;ArrayExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;AwaitExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;BinExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;BlockExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;BoxExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;BreakExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;CallExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;CastExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;ClosureExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;ContinueExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;EffectExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;FieldExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;ForExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;IfExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;IndexExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;Literal&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;LoopExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;MacroCall&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;MacroStmts&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;MatchExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;MethodCallExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;ParenExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;PathExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;PrefixExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;RangeExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;RecordExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;RefExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;ReturnExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;TryExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;TupleExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;WhileExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;YieldExpr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl From&lt;Const&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;Enum&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;ExternBlock&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;ExternCrate&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;Fn&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;Impl&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;MacroCall&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;MacroRules&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;MacroDef&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;Module&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;Static&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;Struct&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;Trait&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAlias&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;Union&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;Use&gt; for Item","synthetic":false,"types":[]},{"text":"impl From&lt;ExprStmt&gt; for Stmt","synthetic":false,"types":[]},{"text":"impl From&lt;Item&gt; for Stmt","synthetic":false,"types":[]},{"text":"impl From&lt;LetStmt&gt; for Stmt","synthetic":false,"types":[]},{"text":"impl From&lt;IdentPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;BoxPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;RestPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;LiteralPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;MacroPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;OrPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;ParenPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;PathPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;WildcardPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;RangePat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;RecordPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;RefPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;SlicePat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;TuplePat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;TupleStructPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;ConstBlockPat&gt; for Pat","synthetic":false,"types":[]},{"text":"impl From&lt;RecordFieldList&gt; for FieldList","synthetic":false,"types":[]},{"text":"impl From&lt;TupleFieldList&gt; for FieldList","synthetic":false,"types":[]},{"text":"impl From&lt;Enum&gt; for Adt","synthetic":false,"types":[]},{"text":"impl From&lt;Struct&gt; for Adt","synthetic":false,"types":[]},{"text":"impl From&lt;Union&gt; for Adt","synthetic":false,"types":[]},{"text":"impl From&lt;Const&gt; for AssocItem","synthetic":false,"types":[]},{"text":"impl From&lt;Fn&gt; for AssocItem","synthetic":false,"types":[]},{"text":"impl From&lt;MacroCall&gt; for AssocItem","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAlias&gt; for AssocItem","synthetic":false,"types":[]},{"text":"impl From&lt;Fn&gt; for ExternItem","synthetic":false,"types":[]},{"text":"impl From&lt;MacroCall&gt; for ExternItem","synthetic":false,"types":[]},{"text":"impl From&lt;Static&gt; for ExternItem","synthetic":false,"types":[]},{"text":"impl From&lt;TypeAlias&gt; for ExternItem","synthetic":false,"types":[]},{"text":"impl From&lt;ConstParam&gt; for GenericParam","synthetic":false,"types":[]},{"text":"impl From&lt;LifetimeParam&gt; for GenericParam","synthetic":false,"types":[]},{"text":"impl From&lt;TypeParam&gt; for GenericParam","synthetic":false,"types":[]},{"text":"impl From&lt;MacroRules&gt; for Macro","synthetic":false,"types":[]},{"text":"impl From&lt;MacroDef&gt; for Macro","synthetic":false,"types":[]},{"text":"impl From&lt;NameRef&gt; for NameLike","synthetic":false,"types":[]},{"text":"impl From&lt;Name&gt; for NameLike","synthetic":false,"types":[]},{"text":"impl From&lt;Lifetime&gt; for NameLike","synthetic":false,"types":[]},{"text":"impl From&lt;u8&gt; for IndentLevel","synthetic":false,"types":[]}];
implementors["test_utils"] = [{"text":"impl From&lt;RangeOrOffset&gt; for TextRange","synthetic":false,"types":[]}];
implementors["tt"] = [{"text":"impl From&lt;Leaf&gt; for TokenTree","synthetic":false,"types":[]},{"text":"impl From&lt;Subtree&gt; for TokenTree","synthetic":false,"types":[]},{"text":"impl From&lt;Literal&gt; for Leaf","synthetic":false,"types":[]},{"text":"impl From&lt;Punct&gt; for Leaf","synthetic":false,"types":[]},{"text":"impl From&lt;Ident&gt; for Leaf","synthetic":false,"types":[]}];
implementors["vfs"] = [{"text":"impl From&lt;AbsPathBuf&gt; for VfsPath","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
//!Exemplo de entidade

// import {
//     Column,
//     Entity,
//     Index, PrimaryGeneratedColumn
// } from 'typeorm'

// @Index('pessoa_pkey', ['id'], { unique: true })
// @Entity('pessoa', { schema: 'public' })
// export class Pessoa {

//     @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
//         id: number

//     @Column('uuid', { name: 'uuid', default: () => 'uuid_generate_v4()' })
//         uuid: string

//     @Column('integer', { name: 'perfil_acesso_id', nullable: true })
//         perfilAcessoId: number | null

//     @Column('integer', { name: 'tipo_rede_social_id', nullable: true })
//         tipoRedeSocialId: number | null

//     @Column('character varying', {
//         name: 'referencia_rede_social_id',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         referenciaRedeSocialId: string | null

//     @Column('integer', { name: 'status_id', nullable: true })
//         statusId: number | null

//     @Column('character varying', { name: 'codigo', length: 12 })
//         codigo: string

//     @Column('character varying', {
//         name: 'flag_tipo_pessoa',
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         flagTipoPessoa: string

//     @Column('character varying', {
//         name: 'tipo_documento_id',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         tipoDocumentoId: string | null

//     @Column('character varying', {
//         name: 'nro_documento',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         nroDocumento: string | null

//     @Column('character varying', { name: 'nome', length: 100 })
//         nome: string

//     @Column('character varying', {
//         name: 'apelido',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         apelido: string | null

//     @Column('character varying', {
//         name: 'razao_social',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         razaoSocial: string | null

//     @Column('character varying', {
//         name: 'inscricao_estadual',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         inscricaoEstadual: string | null

//     @Column('character varying', {
//         name: 'inscricao_municipal',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         inscricaoMunicipal: string | null

//     @Column('character varying', {
//         name: 'rg',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         rg: string | null

//     @Column('character varying', {
//         name: 'uf_rg',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         ufRg: string | null

//     @Column('character varying', {
//         name: 'orgao_emissor_rg',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         orgaoEmissorRg: string | null

//     @Column('integer', { name: 'pais_origem_id', nullable: true })
//         paisOrigemId: number | null

//     @Column('character varying', {
//         name: 'nome_cidade_origem',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         nomeCidadeOrigem: string | null

//     @Column('timestamp with time zone', { name: 'dt_nascimento', nullable: true })
//         dtNascimento: Date | null

//     @Column('character varying', {
//         name: 'flag_sexo',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         flagSexo: string | null

//     @Column('character varying', {
//         name: 'nome_pai',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         nomePai: string | null

//     @Column('character varying', {
//         name: 'nome_mae',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         nomeMae: string | null

//     @Column('character varying', {
//         name: 'tel_principal',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         telPrincipal: string | null

//     @Column('character varying', {
//         name: 'tel_secundario',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         telSecundario: string | null

//     @Column('boolean', { name: 'flag_cadastro_aprovado', nullable: true })
//         flagCadastroAprovado: boolean | null

//     @Column('timestamp with time zone', {
//         name: 'dt_validacao_cadastro',
//         nullable: true,
//     })
//         dtValidacaoCadastro: Date | null

//     @Column('character varying', { name: 'email', length: 100 })
//         email: string

//     @Column('timestamp with time zone', {
//         name: 'dt_email_validacao',
//         nullable: true,
//     })
//         dtEmailValidacao: Date | null

//     @Column('character varying', {
//         name: 'login',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         login: string | null

//     @Column('character varying', { name: 'senha', length: 128 })
//         senha: string

//     @Column('boolean', { name: 'flag_alterar_senha', nullable: true })
//         flagAlterarSenha: boolean | null

//     @Column('character varying', {
//         name: 'observacoes',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         observacoes: string | null

//     @Column('timestamp with time zone', { name: 'dt_cadastro' })
//         dtCadastro: Date

//     @Column('integer', { name: 'usuario_cadastro_id', nullable: true })
//         usuarioCadastroId: number | null

//     @Column('timestamp with time zone', { name: 'dt_alteracao', nullable: true })
//         dtAlteracao: Date | null

//     @Column('integer', { name: 'usuario_alteracao_id', nullable: true })
//         usuarioAlteracaoId: number | null

//     @Column('timestamp with time zone', { name: 'dt_exclusao', nullable: true })
//         dtExclusao: Date | null

//     @Column('integer', { name: 'usuario_exclusao_id', nullable: true })
//         usuarioExclusaoId: number | null

//     @Column('character varying', {
//         name: 'motivo_exclusao',
//         nullable: true,
//         length: 100,
//         default: () => 'NULL::character varying',
//     })
//         motivoExclusao: string | null

// }

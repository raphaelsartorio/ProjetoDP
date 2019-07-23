<template>
	<div class="main-container">
		<div v-if="autenticacao === false" class="main-content">
			<div class="row">
				<div class="col-sm-10 col-sm-offset-1">
					<div class="login-container">
						<div class="center">
							<h1>
								<i class="ace-icon fa fa-leaf green"></i>
								<span class="red">Prática</span>
								<span class="white" id="id-text2">PSTI</span>
							</h1>
							<h4 class="blue" id="id-company-text">&copy; Prática PSTI</h4>
						</div>
						<div class="space-6"></div>
						<div class="position-relative">
							<div id="login-box" v-if="!aparecer" class="login-box visible widget-box no-border">
								<div class="widget-body">
									<div class="widget-main">
										<h4 class="header blue lighter bigger">
											<i class="ace-icon fa fa-coffee green"></i>
											Por favor entre com as suas credenciais
										</h4>
										<div class="space-6"></div>
										<form>
											<fieldset>
												<label class="block clearfix">
													<span class="block input-icon input-icon-right">
														<input type="text" class="form-control" placeholder="Usuário" />
														<i class="ace-icon fa fa-user"></i>
													</span>
												</label>
												<label class="block clearfix">
													<span class="block input-icon input-icon-right">
														<input type="password" class="form-control" placeholder="Senha" />
														<i class="ace-icon fa fa-lock"></i>
													</span>
												</label>
												<div class="space"></div>
												<div class="clearfix">
													<label class="inline">
														<input type="checkbox" class="ace" />
														<span class="lbl"> Lembrar-me</span>
													</label>
													<button @click="autenticacao = true" type="button" class="width-35 pull-right btn btn-sm btn-primary">
														<i class="ace-icon fa fa-key"></i>
														<span class="bigger-110">Login</span>
													</button>
												</div>
												<div class="space-4"></div>
											</fieldset>
										</form>
										<div class="space-6"></div>
									</div><!-- /.widget-main -->
									<div class="toolbar clearfix">
										<div>
											<a href="#" data-target="#forgot-box" class="forgot-password-link">
												<i class="ace-icon fa fa-arrow-left"></i>
												<a @click="aparecer = true">Esqueci minha senha</a>
											</a>
										</div>
									</div>
								</div><!-- /.widget-body -->
							</div><!-- /.login-box -->
							<div id="forgot-box" v-if="aparecer" class="forgot-box visible widget-box no-border">
								<div class="widget-body">
									<div class="widget-main">
										<h4 class="header red lighter bigger">
											<i class="ace-icon fa fa-key"></i>
												Recuperar senha
										</h4>
										<div class="space-6"></div>
										<p>Informe seu e-mail para receber as informações</p>
										<form>
											<fieldset>
												<label class="block clearfix">
													<span class="block input-icon input-icon-right">
														<input type="email" class="form-control" placeholder="Email" />
														<i class="ace-icon fa fa-envelope"></i>
													</span>
												</label>
												<div class="clearfix">
													<button type="button" class="width-35 pull-right btn btn-sm btn-danger">
														<i class="ace-icon fa fa-lightbulb-o"></i>
														<span class="bigger-110">Enviar!</span>
													</button>
												</div>
											</fieldset>
										</form>
									</div><!-- /.widget-main -->
									<div class="toolbar center">
										<a href="#" data-target="#login-box" class="back-to-login-link">
											<a @click="aparecer = false">Voltar ao login</a>
											<i class="ace-icon fa fa-arrow-right"></i>
										</a>
									</div>
								</div><!-- /.widget-body -->
							</div><!-- /.forgot-box -->
						</div><!-- /.position-relative -->
					</div>
				</div><!-- /.col -->
			</div><!-- /.row -->
		</div><!-- /.main-content -->
		<div v-if="autenticacao === true">
			<topo v-on:sair="logout"> </topo>
			<lateral></lateral>
		</div>
	</div><!-- /.main-container -->
</template>

<script>
import topo from './topo'
import lateral from './lateral'

  export default {
	name: 'Login',
	components:{
		topo,
		lateral,
	},

    data: function () {
      return{
		aparecer: false,
		autenticacao: false,
		registros: [],
		registro: {
			usuario: '',
			senha: '',
		}
      }
	},
	methods: {
		testeDeLogin: function () {
			axios({
				method: 'POST',
				url: "http://lvh.me:9001/",
				data: {
					login: this.registro.usuario,
					senha: this.registro.senha
				}
			})
			.then(response => console.log('chegou'))
			.catch(error => console.log('falhou'))
		},
		logout () {
			this.autenticacao = false
		}
	}
  }
</script>
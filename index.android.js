 import React, { Component } from 'react';
 import {
   Alert,
   AppRegistry,
   Image,
   ListView,
   Modal,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   ProgressBarAndroid,
 } from 'react-native';

 var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

 function _renderSelectedNewsModal(news) {
   Alert.alert(news.title, news.body);
 }

 class IfalNews extends Component {
   constructor(props) {
     super(props);
     this.state = {
       dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
       }),
       loaded: false,
     };
   }

   fetchData() {
     this.setState({
       dataSource: this.state.dataSource.cloneWithRows(MOCKED_NEWS_DATA),
       loaded: true,
     });
   }

   componentDidMount() {
     this.fetchData();
   }

   renderLoadingView() {
     return (
       <View style={styles.container}>
         <ProgressBarAndroid styleAttr="Inverse" />
       </View>
     );
   }

   renderNews(news) {
     return (
       <TouchableOpacity onPress={_renderSelectedNewsModal.bind(this, news)}>
         <View style={styles.row}>
           <Image
             source={{uri: news.thumbnail}}
             style={styles.thumbnail}
           />
           <View style={styles.rightContainer}>
             <Text style={styles.title}>{news.title}</Text>
             <Text style={styles.year}>{news.date}</Text>
           </View>
         </View>
       </TouchableOpacity>
     );
   }

   render() {
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }

     return (
       <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderNews}
         style={styles.listView}
         renderSeparator={(sectionID, rowID) =>
           <View key={`${sectionID}-${rowID}`} style={styles.separator} />
         }/>
     );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    height: 81,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  listView: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginTop: 10,
    marginBottom: 10,
  },
  thumbnail: {
    width: 81,
    height: 81,
  },
  rightContainer: {
    height: 81,
    flex: 1,
    paddingLeft: 10,
    flexWrap: "nowrap"
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },
  year: {
    textAlign: 'right',
  },
});

var MOCKED_NEWS_DATA = [
  {
    id: 1,
    title: "Seminário do NIT réune alunos, pesquisadores e professores de instituições de ensino superior",
    date: "07/05/2016",
    hour: "07h59",
    thumbnail: "http://www2.ifal.edu.br/noticias/seminario-do-nit-reune-alunos-pesquisadores-e-professores-de-instituicoes-de-ensino-superior/transferencia-de-tecnologia/@@images/655babdd-7c0b-412b-84b1-2845b6597d68.jpeg",
    tags: ["Aluno"],
    body: 'A discussão sobre transferência de tecnologia, propriedade intelectual e inovação foram assuntos tratados no seminário promovido pelo NIT (Núcleo de Inovação Tecnológica) do Instituto Federal de Alagoas, vinculado à PRPI ( Pró-Reitoria de Pesquisa e Inovação) . O evento ocorreu na noite de quinta-feira (5) na Casa da Indústria, no bairro do Farol, em Maceió e teve como tema principal Discutindo Alternativas de Transferência de Tecnologia para a Indústria".'
  },
  {
    id: 2,
    title: "Pró-Reitoria de Pesquisa e Inovação seleciona projetos para PIBIC e PIBIT",
    date: "06/05/2016",
    hour: "21h20",
    thumbnail: "http://www2.ifal.edu.br/noticias/pro-reitoria-de-pesquisa-e-inovacao-lanca-edital-de-selecao-de-projetos-para-pibic-e-pibit/173e9b6e-583a-45bf-a129-c805f3cce3c2.jpeg/@@images/dc3f41b8-b146-48f5-95de-d93411f233b7.jpeg",
    tags: ["Aluno", "Servidor"],
    body: 'A Pró-Reitoria de Pesquisa e Inovação (PRPI) do Instituto Federal de Alagoas - Ifal torna pública, nesta sexta-feira (6), a abertura de inscrições do edital de seleção de projetos de pesquisa para os programas institucionais de bolsas de iniciação científica (Pibic) e de desenvolvimento tecnológico e inovação (Pibiti), pelo link comunica.ifal.edu.br. O prazo de submissão de propostas encerra no dia 6 de junho. Ambos os programas oferecem bolsas no valor de R$400 por projeto aprovado. Os orientadores dos projetos devem ser do quadro ativo permanente de servidores do Ifal e possuir curso de graduação. Já para bolsistas, só poderão ser indicados alunos regularmente matriculados em curso técnico ou de graduação nas modalidades presencial ou a distância do Ifal. A vigência da bolsa será para o período de 1º de agosto de 2016 a 31 de Julho de 2017. Ao todo, serão ofertadas 120 bolsas aos projetos aprovados na modalidade Pibiti e as outras 80 aos projetos aprovados na modalidade Pibic, obedecendo a ordem de classificação. A PRPI inovou no processo de submissão. Este ano, as propostas deverão ser preenchidas pelo orientador do projeto por meio de formulário online disponível no sistema “ComunicaPRPI”, uma plataforma eletrônica fruto de projeto de pesquisa institucional que envolveu docentes e estudantes. "É um produto pensado para ser usado em larga escala pelas diversas unidades de ensino e Reitoria. Esperamos torná-lo cada vez mais funcional e otimizado, com vistas à transferência de sua tecnologia, protegida por propriedade intelectual, como processo desenvolvido pelo Ifal", afirma o pró-reitor Carlos Henrique Almeida. A divulgação do resultado preliminar da seleção está prevista para o dia 21 de julho. Confira outras informações no EDITAL.',
  },
  {
    id: 3,
    title: "Ifal Batalha sedia evento empreendedor “Fora da Caixa”",
    date: "06/05/2016",
    hour: "21h20",
    thumbnail: "http://www2.ifal.edu.br/noticias/ifal-batalha-sedia-evento-empreendedor-201cfora-da-caixa201d/fora-da-caixa-em-batalha/@@images/3fcdce6b-3d41-4bff-a9f3-e0ea749db3e4.jpeg",
    tags: ["Aluno"],
    body: '',
  },
  {
    id: 4,
    title: "Remoção de docentes: publicado resultado do Ciclo 001 e divulgadas vagas do Ciclo 002",
    date: "06/05/2016",
    hour: "21h20",
    thumbnail: "http://3.bp.blogspot.com/-4CrK5SJGAg0/UnPxkrUgguI/AAAAAAAAAzY/p_oPpdUxAjc/s400/ifal.PNG",
    tags: ["Servidor"],
    body: 'A discussão sobre transferência de tecnologia, propriedade intelectual e inovação foram assuntos tratados no seminário promovido pelo NIT (Núcleo de Inovação Tecnológica) do Instituto Federal de Alagoas, vinculado à PRPI ( Pró-Reitoria de Pesquisa e Inovação) . O evento ocorreu na noite de quinta-feira (5) na Casa da Indústria, no bairro do Farol, em Maceió e teve como tema principal Discutindo Alternativas de Transferência de Tecnologia para a Indústria".',
  },
  {
    id: 5,
    title: "Resultado do edital de remoção de TAE, cargo psicólogo, é divulgado",
    date: "06/05/2016",
    hour: "21h20",
    thumbnail: "http://3.bp.blogspot.com/-4CrK5SJGAg0/UnPxkrUgguI/AAAAAAAAAzY/p_oPpdUxAjc/s400/ifal.PNG",
    tags: ["Aluno", "Servidor"],
    body: 'A discussão sobre transferência de tecnologia, propriedade intelectual e inovação foram assuntos tratados no seminário promovido pelo NIT (Núcleo de Inovação Tecnológica) do Instituto Federal de Alagoas, vinculado à PRPI ( Pró-Reitoria de Pesquisa e Inovação) . O evento ocorreu na noite de quinta-feira (5) na Casa da Indústria, no bairro do Farol, em Maceió e teve como tema principal Discutindo Alternativas de Transferência de Tecnologia para a Indústria".',
  },
  {
    id: 6,
    title: "Ifal adere ao Programa Pró-Equidade de Gênero e Raça e vai capacitar líderes setoriais sobre o tema",
    date: "06/05/2016",
    hour: "21h20",
    thumbnail: "http://www2.ifal.edu.br/noticias/ifal-adere-ao-programa-pro-equidade-de-genero-e-raca-e-planeja-capacitacao-para-servidores-na-area/peger/@@images/6f99e0de-06db-4cfe-9750-16f2d0cb803b.jpeg",
    tags: ["Aluno", "Servidor"],
    body: 'A discussão sobre transferência de tecnologia, propriedade intelectual e inovação foram assuntos tratados no seminário promovido pelo NIT (Núcleo de Inovação Tecnológica) do Instituto Federal de Alagoas, vinculado à PRPI ( Pró-Reitoria de Pesquisa e Inovação) . O evento ocorreu na noite de quinta-feira (5) na Casa da Indústria, no bairro do Farol, em Maceió e teve como tema principal Discutindo Alternativas de Transferência de Tecnologia para a Indústria".',
  },
  {
    id: 7,
    title: "Campus Rio Largo oferece serviços de saúde e organiza corrida para comunidade",
    date: "06/05/2016",
    hour: "21h20",
    thumbnail: "http://www2.ifal.edu.br/noticias/campus-rio-largo-oferece-servicos-de-saude-e-organiza-corrida-para-comunidade/programacao-saude-na-escola/@@images/65a9eae3-0485-4914-9feb-0671cef175ee.jpeg",
    tags: ["Aluno", "Servidor"],
    body: 'A discussão sobre transferência de tecnologia, propriedade intelectual e inovação foram assuntos tratados no seminário promovido pelo NIT (Núcleo de Inovação Tecnológica) do Instituto Federal de Alagoas, vinculado à PRPI ( Pró-Reitoria de Pesquisa e Inovação) . O evento ocorreu na noite de quinta-feira (5) na Casa da Indústria, no bairro do Farol, em Maceió e teve como tema principal Discutindo Alternativas de Transferência de Tecnologia para a Indústria".',
  },
  {
    id: 8,
    title: "Licença-paternidade para servidores é ampliada",
    date: "06/05/2016",
    hour: "21h20",
    thumbnail: "http://3.bp.blogspot.com/-4CrK5SJGAg0/UnPxkrUgguI/AAAAAAAAAzY/p_oPpdUxAjc/s400/ifal.PNG",
    tags: ["Aluno", "Servidor"],
    body: 'A discussão sobre transferência de tecnologia, propriedade intelectual e inovação foram assuntos tratados no seminário promovido pelo NIT (Núcleo de Inovação Tecnológica) do Instituto Federal de Alagoas, vinculado à PRPI ( Pró-Reitoria de Pesquisa e Inovação) . O evento ocorreu na noite de quinta-feira (5) na Casa da Indústria, no bairro do Farol, em Maceió e teve como tema principal Discutindo Alternativas de Transferência de Tecnologia para a Indústria".',
  },
  {
    id: 9,
    title: "Ifal abre inscrições para cursos técnicos subsequentes",
    date: "06/05/2016",
    hour: "21h20",
    thumbnail: "http://www2.ifal.edu.br/noticias/ifal-abre-inscricoes-para-cursos-tecnicos-subsequentes/inscricoes-abertas-no-ifal/@@images/25026199-344a-415d-b81c-f475f892a49c.jpeg",
    tags: ["Aluno", "Servidor"],
    body: 'A discussão sobre transferência de tecnologia, propriedade intelectual e inovação foram assuntos tratados no seminário promovido pelo NIT (Núcleo de Inovação Tecnológica) do Instituto Federal de Alagoas, vinculado à PRPI ( Pró-Reitoria de Pesquisa e Inovação) . O evento ocorreu na noite de quinta-feira (5) na Casa da Indústria, no bairro do Farol, em Maceió e teve como tema principal Discutindo Alternativas de Transferência de Tecnologia para a Indústria".',
  },
  {
    id: 10,
    title: "Olimpíada Alagoana de Química tem medalhistas do Ifal",
    date: "06/05/2016",
    hour: "21h20",
    thumbnail: "http://www2.ifal.edu.br/noticias/olimpiada-alagoana-de-quimica-tem-medalhistas-do-ifal/olimpiada-alagoana-de-quimica/@@images/2ec13699-043f-4de8-b875-bd0e310d483c.jpeg",
    tags: ["Aluno", "Servidor"],
    body: 'A discussão sobre transferência de tecnologia, propriedade intelectual e inovação foram assuntos tratados no seminário promovido pelo NIT (Núcleo de Inovação Tecnológica) do Instituto Federal de Alagoas, vinculado à PRPI ( Pró-Reitoria de Pesquisa e Inovação) . O evento ocorreu na noite de quinta-feira (5) na Casa da Indústria, no bairro do Farol, em Maceió e teve como tema principal Discutindo Alternativas de Transferência de Tecnologia para a Indústria".',
  }
];

AppRegistry.registerComponent('IfalNews', () => IfalNews);

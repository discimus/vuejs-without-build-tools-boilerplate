SOURCE_PATH="vuejs-empty-project"
DESTINATION_PATH="vuejs-$1"


echo "Criando diretório '$DESTINATION_PATH' ..."
mkdir $DESTINATION_PATH

echo "Copiando arquivos de '$SOURCE_PATH' para '$DESTINATION_PATH' ..."
cp -a $SOURCE_PATH/. $DESTINATION_PATH

echo "Arquivos copiados com sucesso!"
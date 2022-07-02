SOURCE_PATH="vuejs-empty-project"
DESTINATION_PATH="vuejs-$1"

echo "Copiando arquivos de '$SOURCE_PATH' to '$DESTINATION_PATH' ..."

echo "Criando diretório '$DESTINATION_PATH' ..."
mkdir $DESTINATION_PATH

for path in ${SOURCE_PATH}/*
do
    filename=${path##*/}
    cp $path "$DESTINATION_PATH/$filename"
done

echo "Arquivos copiados com sucesso!"
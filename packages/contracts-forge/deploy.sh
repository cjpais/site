echo "Deploying contracts..."

echo "Deploying Page"
forge create --chain polygon-mumbai --private-key $DEPLOYER_PRIVATE_KEY --rpc-url https://polygon-mumbai.infura.io/v3/9e55ae7e1685411abf37e7e1af924d22 src/Page:Page

echo "Deploying Log\n"
#forge create --chain polygon-mumbai --private-key $SITE_PK --rpc-url https://polygon-mumbai.infura.io/v3/9e55ae7e1685411abf37e7e1af924d22 Log

echo "Deploying Tag\n"
#forge create --chain polygon-mumbai --private-key $SITE_PK --rpc-url https://polygon-mumbai.infura.io/v3/9e55ae7e1685411abf37e7e1af924d22 Tag

echo "Deploying Comment\n"
#forge create --chain polygon-mumbai --private-key $SITE_PK --rpc-url https://polygon-mumbai.infura.io/v3/9e55ae7e1685411abf37e7e1af924d22 Comment
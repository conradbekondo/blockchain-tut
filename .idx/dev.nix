{ pkgs }: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.yarn
  ];
  idx.extensions = [
    "bradlc.vscode-tailwindcss"
    "eamodio.gitlens"
    "NomicFoundation.hardhat-solidity"
    "nrwl.angular-console"
    "solidjs-community.solid-snippets"
    "usernamehw.errorlens"
  ];
  env = {
    CLIENT_PORT = 4200;
    SERVER_PORT = 7000;
  };
  idx.workspace = {
    onCreate = {
      npm-install = "yarn install";
    };

    onStart = {
      start = "echo \"https://$CLIENT_PORT-$WEB_HOST\" && yarn serve:dev";
    };
  };
}

## 使用

為了產出 renderForm.js 的壓縮檔，所以此專案使用到了 webpack 與 babel。

不過對於 HERO 而言，必要的檔案只有以下幾支：

- index.html
- renderForm.css
- renderForm.bundle.js

## 接口

以下 API 皆為全域範疇，一般情況下應可正常使用。

- 取得當前表單的 JSON 結構：

		jun.getRenderFormJS();

- 藉由 JSON 結構渲染畫面：

		jun.renderForm(obj);

  - 參數只接受**物件型別**。
  
- 檢查必填欄位：

		jun.checkRequired();
		
  - 檢查所有的必填欄位是否皆以確實填寫，若是則回傳 true，反之。
  
- 檢查信箱格式：

		jun.checkEmail();
		
  - 檢查信箱欄位是否符合預期的格式，若符合則回傳 true，反之。
  - 在此驗證信箱使用的正則式為：  
  	`/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`
	
- 開啟「唯讀」模式：

		jun.openReadOnlyMode();
		
  - 開啟後所有的輸入框皆呈現禁用狀態。
	
- 「唯讀」模式下的「顯示分數」功能：

		jun.showScore();
		
  - 需確認表單已開啟計分模式，否則回傳 false。

The CI.yaml workflow is running with triggers that will starts him on every push or pull request on the Dockerfile and the index.js(the app)
only if it's to or from the 'main' branch.

the jobs of the workflow with explanation:
1. parallel tests using matrix method to run tests of the node.js on different versions (for more afficency of time and check the compatibility of the app on other versions)
   the tests runs on versions 14,16,18 on linux and windows to cover more users of the app.

2. After the test will complete (and only if it succesed) the workflow starts to the build of the image for the app from the Dockerfile(there is and explanation of the Dockerfile in it)

3. After the build, the workflow use his configured secret for docker hub registration ( in order to add secret, go to setting, secrets and var and add secret) to upload the image

4. The trigger-deploy job in your GitHub Actions workflow is designed to trigger another workflow, specifically the deploy.yaml workflow,
 after the build-and-push-docker job completes. I am using the github token for collecting the workflow api to know  when it will trigger.

5. The deploy.yaml will run

/**
 * QCObjects SDK 1.0
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
const version = "0.0.1";
const appName = "constitucion";
const cacheName = `qcobjects-app-${appName}-${version}`;
const start_url = "/?homescreen=1";
caches.delete(cacheName); // force to reload cache for the first time the sw is loaded
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([`${start_url}`,
	"/",
	".dockerignore",
	"Dockerfile",
	"app.js",
	"css/components/card.css",
	"css/components/modal.css",
	"css/desktop/container.css",
	"css/desktop/content.css",
	"css/desktop/footer.css",
	"css/desktop/index.css",
	"css/desktop/navbar.css",
	"css/desktop/sidebar.css",
	"css/index.css",
	"css/mobile/content.css",
	"css/mobile/footer.css",
	"css/mobile/index.css",
	"css/mobile/navbar.css",
	"css/mobile/sidebar.css",
	"css/theme/basic/style.css",
	"css/theme/cyan/style.css",
	"css/theme/redlight/style.css",
	"css/theme/xtra/style.css",
	"favicon.ico",
	"humans.txt",
	"img/Q_web copy.png",
	"img/Q_web.png",
	"img/Q_web.svg",
	"img/icons/icon-128x128.png",
	"img/icons/icon-144x144.png",
	"img/icons/icon-152x152.png",
	"img/icons/icon-192x192.png",
	"img/icons/icon-384x384.png",
	"img/icons/icon-512x512.png",
	"img/icons/icon-72x72.png",
	"img/icons/icon-96x96.png",
	"img/logo.png",
	"img/placeholder.svg",
	"img/screenshots/screenshot1.png",
	"img/screenshots/screenshot1.webp",
	"img/screenshots/screenshot2.png",
	"img/screenshots/screenshot2.webp",
	"index.html",
	"js/init.js",
	"js/packages/installer.js",
	"js/packages/org.quickcorp.custom.components.js",
	"js/packages/org.quickcorp.custom.controllers.js",
	"js/packages/org.quickcorp.custom.js",
	"js/packages/org.quickcorp.custom.models.js",
	"js/packages/org.quickcorp.custom.views.js",
	"localhost-cert.pem",
	"localhost-privkey.pem",
	"manifest.json",
	"node_modules/.bin/handlebars",
	"node_modules/.bin/mime",
	"node_modules/.bin/qco",
	"node_modules/.bin/qcobjects",
	"node_modules/.bin/qcobjects-cli",
	"node_modules/.bin/qcobjects-createcert",
	"node_modules/.bin/qcobjects-gae-server",
	"node_modules/.bin/qcobjects-server",
	"node_modules/.bin/qcobjects-shell",
	"node_modules/.bin/uglifyjs",
	"node_modules/commander/CHANGELOG.md",
	"node_modules/commander/LICENSE",
	"node_modules/commander/Readme.md",
	"node_modules/commander/index.js",
	"node_modules/commander/package.json",
	"node_modules/commander/typings/index.d.ts",
	"node_modules/handlebars/LICENSE",
	"node_modules/handlebars/README.markdown",
	"node_modules/handlebars/bin/handlebars",
	"node_modules/handlebars/dist/amd/handlebars/base.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/ast.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/base.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/code-gen.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/compiler.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/helpers.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/javascript-compiler.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/parser.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/printer.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/visitor.js",
	"node_modules/handlebars/dist/amd/handlebars/compiler/whitespace-control.js",
	"node_modules/handlebars/dist/amd/handlebars/decorators/inline.js",
	"node_modules/handlebars/dist/amd/handlebars/decorators.js",
	"node_modules/handlebars/dist/amd/handlebars/exception.js",
	"node_modules/handlebars/dist/amd/handlebars/helpers/block-helper-missing.js",
	"node_modules/handlebars/dist/amd/handlebars/helpers/each.js",
	"node_modules/handlebars/dist/amd/handlebars/helpers/helper-missing.js",
	"node_modules/handlebars/dist/amd/handlebars/helpers/if.js",
	"node_modules/handlebars/dist/amd/handlebars/helpers/log.js",
	"node_modules/handlebars/dist/amd/handlebars/helpers/lookup.js",
	"node_modules/handlebars/dist/amd/handlebars/helpers/with.js",
	"node_modules/handlebars/dist/amd/handlebars/helpers.js",
	"node_modules/handlebars/dist/amd/handlebars/internal/create-new-lookup-object.js",
	"node_modules/handlebars/dist/amd/handlebars/internal/proto-access.js",
	"node_modules/handlebars/dist/amd/handlebars/internal/wrapHelper.js",
	"node_modules/handlebars/dist/amd/handlebars/logger.js",
	"node_modules/handlebars/dist/amd/handlebars/no-conflict.js",
	"node_modules/handlebars/dist/amd/handlebars/runtime.js",
	"node_modules/handlebars/dist/amd/handlebars/safe-string.js",
	"node_modules/handlebars/dist/amd/handlebars/utils.js",
	"node_modules/handlebars/dist/amd/handlebars.js",
	"node_modules/handlebars/dist/amd/handlebars.runtime.js",
	"node_modules/handlebars/dist/amd/precompiler.js",
	"node_modules/handlebars/dist/cjs/handlebars/base.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/base.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/code-gen.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/helpers.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/printer.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js",
	"node_modules/handlebars/dist/cjs/handlebars/compiler/whitespace-control.js",
	"node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js",
	"node_modules/handlebars/dist/cjs/handlebars/decorators.js",
	"node_modules/handlebars/dist/cjs/handlebars/exception.js",
	"node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js",
	"node_modules/handlebars/dist/cjs/handlebars/helpers/each.js",
	"node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js",
	"node_modules/handlebars/dist/cjs/handlebars/helpers/if.js",
	"node_modules/handlebars/dist/cjs/handlebars/helpers/log.js",
	"node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js",
	"node_modules/handlebars/dist/cjs/handlebars/helpers/with.js",
	"node_modules/handlebars/dist/cjs/handlebars/helpers.js",
	"node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js",
	"node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js",
	"node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js",
	"node_modules/handlebars/dist/cjs/handlebars/logger.js",
	"node_modules/handlebars/dist/cjs/handlebars/no-conflict.js",
	"node_modules/handlebars/dist/cjs/handlebars/runtime.js",
	"node_modules/handlebars/dist/cjs/handlebars/safe-string.js",
	"node_modules/handlebars/dist/cjs/handlebars/utils.js",
	"node_modules/handlebars/dist/cjs/handlebars.js",
	"node_modules/handlebars/dist/cjs/handlebars.runtime.js",
	"node_modules/handlebars/dist/cjs/precompiler.js",
	"node_modules/handlebars/dist/handlebars.amd.js",
	"node_modules/handlebars/dist/handlebars.amd.min.js",
	"node_modules/handlebars/dist/handlebars.js",
	"node_modules/handlebars/dist/handlebars.min.js",
	"node_modules/handlebars/dist/handlebars.runtime.amd.js",
	"node_modules/handlebars/dist/handlebars.runtime.amd.min.js",
	"node_modules/handlebars/dist/handlebars.runtime.js",
	"node_modules/handlebars/dist/handlebars.runtime.min.js",
	"node_modules/handlebars/lib/handlebars/base.js",
	"node_modules/handlebars/lib/handlebars/compiler/ast.js",
	"node_modules/handlebars/lib/handlebars/compiler/base.js",
	"node_modules/handlebars/lib/handlebars/compiler/code-gen.js",
	"node_modules/handlebars/lib/handlebars/compiler/compiler.js",
	"node_modules/handlebars/lib/handlebars/compiler/helpers.js",
	"node_modules/handlebars/lib/handlebars/compiler/javascript-compiler.js",
	"node_modules/handlebars/lib/handlebars/compiler/parser.js",
	"node_modules/handlebars/lib/handlebars/compiler/printer.js",
	"node_modules/handlebars/lib/handlebars/compiler/visitor.js",
	"node_modules/handlebars/lib/handlebars/compiler/whitespace-control.js",
	"node_modules/handlebars/lib/handlebars/decorators/inline.js",
	"node_modules/handlebars/lib/handlebars/decorators.js",
	"node_modules/handlebars/lib/handlebars/exception.js",
	"node_modules/handlebars/lib/handlebars/helpers/block-helper-missing.js",
	"node_modules/handlebars/lib/handlebars/helpers/each.js",
	"node_modules/handlebars/lib/handlebars/helpers/helper-missing.js",
	"node_modules/handlebars/lib/handlebars/helpers/if.js",
	"node_modules/handlebars/lib/handlebars/helpers/log.js",
	"node_modules/handlebars/lib/handlebars/helpers/lookup.js",
	"node_modules/handlebars/lib/handlebars/helpers/with.js",
	"node_modules/handlebars/lib/handlebars/helpers.js",
	"node_modules/handlebars/lib/handlebars/internal/create-new-lookup-object.js",
	"node_modules/handlebars/lib/handlebars/internal/proto-access.js",
	"node_modules/handlebars/lib/handlebars/internal/wrapHelper.js",
	"node_modules/handlebars/lib/handlebars/logger.js",
	"node_modules/handlebars/lib/handlebars/no-conflict.js",
	"node_modules/handlebars/lib/handlebars/runtime.js",
	"node_modules/handlebars/lib/handlebars/safe-string.js",
	"node_modules/handlebars/lib/handlebars/utils.js",
	"node_modules/handlebars/lib/handlebars.js",
	"node_modules/handlebars/lib/handlebars.runtime.js",
	"node_modules/handlebars/lib/index.js",
	"node_modules/handlebars/lib/precompiler.js",
	"node_modules/handlebars/package.json",
	"node_modules/handlebars/print-script",
	"node_modules/handlebars/release-notes.md",
	"node_modules/handlebars/runtime.d.ts",
	"node_modules/handlebars/runtime.js",
	"node_modules/handlebars/types/index.d.ts",
	"node_modules/mime/.eslintrc.json",
	"node_modules/mime/.github/ISSUE_TEMPLATE.md",
	"node_modules/mime/.github/PULL_REQUEST_TEMPLATE.md",
	"node_modules/mime/.travis.yml",
	"node_modules/mime/CHANGELOG.md",
	"node_modules/mime/CONTRIBUTING.md",
	"node_modules/mime/LICENSE",
	"node_modules/mime/Mime.js",
	"node_modules/mime/README.md",
	"node_modules/mime/cli.js",
	"node_modules/mime/index.js",
	"node_modules/mime/lite.js",
	"node_modules/mime/package.json",
	"node_modules/mime/src/README_js.md",
	"node_modules/mime/src/benchmark.js",
	"node_modules/mime/src/build.js",
	"node_modules/mime/src/test.js",
	"node_modules/mime/types/other.js",
	"node_modules/mime/types/standard.js",
	"node_modules/minimist/.travis.yml",
	"node_modules/minimist/LICENSE",
	"node_modules/minimist/example/parse.js",
	"node_modules/minimist/index.js",
	"node_modules/minimist/package.json",
	"node_modules/minimist/readme.markdown",
	"node_modules/minimist/test/bool.js",
	"node_modules/minimist/test/dash.js",
	"node_modules/minimist/test/default_bool.js",
	"node_modules/minimist/test/dotted.js",
	"node_modules/minimist/test/long.js",
	"node_modules/minimist/test/num.js",
	"node_modules/minimist/test/parse.js",
	"node_modules/minimist/test/parse_modified.js",
	"node_modules/minimist/test/short.js",
	"node_modules/minimist/test/whitespace.js",
	"node_modules/neo-async/LICENSE",
	"node_modules/neo-async/README.md",
	"node_modules/neo-async/all.js",
	"node_modules/neo-async/allLimit.js",
	"node_modules/neo-async/allSeries.js",
	"node_modules/neo-async/angelFall.js",
	"node_modules/neo-async/any.js",
	"node_modules/neo-async/anyLimit.js",
	"node_modules/neo-async/anySeries.js",
	"node_modules/neo-async/apply.js",
	"node_modules/neo-async/applyEach.js",
	"node_modules/neo-async/applyEachSeries.js",
	"node_modules/neo-async/async.js",
	"node_modules/neo-async/async.min.js",
	"node_modules/neo-async/asyncify.js",
	"node_modules/neo-async/auto.js",
	"node_modules/neo-async/autoInject.js",
	"node_modules/neo-async/cargo.js",
	"node_modules/neo-async/compose.js",
	"node_modules/neo-async/concat.js",
	"node_modules/neo-async/concatLimit.js",
	"node_modules/neo-async/concatSeries.js",
	"node_modules/neo-async/constant.js",
	"node_modules/neo-async/createLogger.js",
	"node_modules/neo-async/detect.js",
	"node_modules/neo-async/detectLimit.js",
	"node_modules/neo-async/detectSeries.js",
	"node_modules/neo-async/dir.js",
	"node_modules/neo-async/doDuring.js",
	"node_modules/neo-async/doUntil.js",
	"node_modules/neo-async/doWhilst.js",
	"node_modules/neo-async/during.js",
	"node_modules/neo-async/each.js",
	"node_modules/neo-async/eachLimit.js",
	"node_modules/neo-async/eachOf.js",
	"node_modules/neo-async/eachOfLimit.js",
	"node_modules/neo-async/eachOfSeries.js",
	"node_modules/neo-async/eachSeries.js",
	"node_modules/neo-async/ensureAsync.js",
	"node_modules/neo-async/every.js",
	"node_modules/neo-async/everyLimit.js",
	"node_modules/neo-async/everySeries.js",
	"node_modules/neo-async/fast.js",
	"node_modules/neo-async/filter.js",
	"node_modules/neo-async/filterLimit.js",
	"node_modules/neo-async/filterSeries.js",
	"node_modules/neo-async/find.js",
	"node_modules/neo-async/findLimit.js",
	"node_modules/neo-async/findSeries.js",
	"node_modules/neo-async/foldl.js",
	"node_modules/neo-async/foldr.js",
	"node_modules/neo-async/forEach.js",
	"node_modules/neo-async/forEachLimit.js",
	"node_modules/neo-async/forEachOf.js",
	"node_modules/neo-async/forEachOfLimit.js",
	"node_modules/neo-async/forEachOfSeries.js",
	"node_modules/neo-async/forEachSeries.js",
	"node_modules/neo-async/forever.js",
	"node_modules/neo-async/groupBy.js",
	"node_modules/neo-async/groupByLimit.js",
	"node_modules/neo-async/groupBySeries.js",
	"node_modules/neo-async/inject.js",
	"node_modules/neo-async/iterator.js",
	"node_modules/neo-async/log.js",
	"node_modules/neo-async/map.js",
	"node_modules/neo-async/mapLimit.js",
	"node_modules/neo-async/mapSeries.js",
	"node_modules/neo-async/mapValues.js",
	"node_modules/neo-async/mapValuesLimit.js",
	"node_modules/neo-async/mapValuesSeries.js",
	"node_modules/neo-async/memoize.js",
	"node_modules/neo-async/nextTick.js",
	"node_modules/neo-async/omit.js",
	"node_modules/neo-async/omitLimit.js",
	"node_modules/neo-async/omitSeries.js",
	"node_modules/neo-async/package.json",
	"node_modules/neo-async/parallel.js",
	"node_modules/neo-async/parallelLimit.js",
	"node_modules/neo-async/pick.js",
	"node_modules/neo-async/pickLimit.js",
	"node_modules/neo-async/pickSeries.js",
	"node_modules/neo-async/priorityQueue.js",
	"node_modules/neo-async/queue.js",
	"node_modules/neo-async/race.js",
	"node_modules/neo-async/reduce.js",
	"node_modules/neo-async/reduceRight.js",
	"node_modules/neo-async/reflect.js",
	"node_modules/neo-async/reflectAll.js",
	"node_modules/neo-async/reject.js",
	"node_modules/neo-async/rejectLimit.js",
	"node_modules/neo-async/rejectSeries.js",
	"node_modules/neo-async/retry.js",
	"node_modules/neo-async/retryable.js",
	"node_modules/neo-async/safe.js",
	"node_modules/neo-async/select.js",
	"node_modules/neo-async/selectLimit.js",
	"node_modules/neo-async/selectSeries.js",
	"node_modules/neo-async/seq.js",
	"node_modules/neo-async/series.js",
	"node_modules/neo-async/setImmediate.js",
	"node_modules/neo-async/some.js",
	"node_modules/neo-async/someLimit.js",
	"node_modules/neo-async/someSeries.js",
	"node_modules/neo-async/sortBy.js",
	"node_modules/neo-async/sortByLimit.js",
	"node_modules/neo-async/sortBySeries.js",
	"node_modules/neo-async/timeout.js",
	"node_modules/neo-async/times.js",
	"node_modules/neo-async/timesLimit.js",
	"node_modules/neo-async/timesSeries.js",
	"node_modules/neo-async/transform.js",
	"node_modules/neo-async/transformLimit.js",
	"node_modules/neo-async/transformSeries.js",
	"node_modules/neo-async/tryEach.js",
	"node_modules/neo-async/unmemoize.js",
	"node_modules/neo-async/until.js",
	"node_modules/neo-async/waterfall.js",
	"node_modules/neo-async/whilst.js",
	"node_modules/neo-async/wrapSync.js",
	"node_modules/optimist/.travis.yml",
	"node_modules/optimist/LICENSE",
	"node_modules/optimist/example/bool.js",
	"node_modules/optimist/example/boolean_double.js",
	"node_modules/optimist/example/boolean_single.js",
	"node_modules/optimist/example/default_hash.js",
	"node_modules/optimist/example/default_singles.js",
	"node_modules/optimist/example/divide.js",
	"node_modules/optimist/example/line_count.js",
	"node_modules/optimist/example/line_count_options.js",
	"node_modules/optimist/example/line_count_wrap.js",
	"node_modules/optimist/example/nonopt.js",
	"node_modules/optimist/example/reflect.js",
	"node_modules/optimist/example/short.js",
	"node_modules/optimist/example/string.js",
	"node_modules/optimist/example/usage-options.js",
	"node_modules/optimist/example/xup.js",
	"node_modules/optimist/index.js",
	"node_modules/optimist/package.json",
	"node_modules/optimist/readme.markdown",
	"node_modules/optimist/test/_/argv.js",
	"node_modules/optimist/test/_/bin.js",
	"node_modules/optimist/test/_.js",
	"node_modules/optimist/test/dash.js",
	"node_modules/optimist/test/parse.js",
	"node_modules/optimist/test/parse_modified.js",
	"node_modules/optimist/test/short.js",
	"node_modules/optimist/test/usage.js",
	"node_modules/optimist/test/whitespace.js",
	"node_modules/qcobjects/.dockerignore",
	"node_modules/qcobjects/.github/FUNDING 2.yml",
	"node_modules/qcobjects/.github/FUNDING.yml",
	"node_modules/qcobjects/.github/ISSUE_TEMPLATE/bug_report 2.md",
	"node_modules/qcobjects/.github/ISSUE_TEMPLATE/bug_report.md",
	"node_modules/qcobjects/.github/ISSUE_TEMPLATE/custom 2.md",
	"node_modules/qcobjects/.github/ISSUE_TEMPLATE/custom.md",
	"node_modules/qcobjects/.github/ISSUE_TEMPLATE/feature_request 2.md",
	"node_modules/qcobjects/.github/ISSUE_TEMPLATE/feature_request.md",
	"node_modules/qcobjects/.github/ISSUE_TEMPLATE/issue-template 2.md",
	"node_modules/qcobjects/.github/ISSUE_TEMPLATE/issue-template.md",
	"node_modules/qcobjects/.project",
	"node_modules/qcobjects/AUTHOR.md",
	"node_modules/qcobjects/CNAME",
	"node_modules/qcobjects/CODE_OF_CONDUCT.md",
	"node_modules/qcobjects/CONTRIBUTING.md",
	"node_modules/qcobjects/Dockerfile",
	"node_modules/qcobjects/LICENSE.txt",
	"node_modules/qcobjects/QCObjects.js",
	"node_modules/qcobjects/README.md",
	"node_modules/qcobjects/README.pdf",
	"node_modules/qcobjects/README.rst",
	"node_modules/qcobjects/_config.yml",
	"node_modules/qcobjects/bin/install/macOS/install_qcobjects 2.sh",
	"node_modules/qcobjects/bin/install/macOS/install_qcobjects.sh",
	"node_modules/qcobjects/bin/install/ubuntu18/etc/qcobjects/config.json 2.template",
	"node_modules/qcobjects/bin/install/ubuntu18/etc/qcobjects/config.json.template",
	"node_modules/qcobjects/bin/install/ubuntu18/etc/systemd/system/qcobjects.service",
	"node_modules/qcobjects/bin/install/ubuntu18/install_qcobjects 2.sh",
	"node_modules/qcobjects/bin/install/ubuntu18/install_qcobjects.sh",
	"node_modules/qcobjects/config-example.json",
	"node_modules/qcobjects/doc/README.rst",
	"node_modules/qcobjects/doc/css/index 2.css",
	"node_modules/qcobjects/doc/css/index.css",
	"node_modules/qcobjects/doc/css/prism-okaidia 2.css",
	"node_modules/qcobjects/doc/css/prism-okaidia.css",
	"node_modules/qcobjects/doc/css/snippet 2.css",
	"node_modules/qcobjects/doc/css/snippet.css",
	"node_modules/qcobjects/doc/css/theme.css",
	"node_modules/qcobjects/doc/img/ALPHA-RISE 2.png",
	"node_modules/qcobjects/doc/img/ALPHA-RISE.png",
	"node_modules/qcobjects/doc/img/QCObjects-CLI-AMP 2.gif",
	"node_modules/qcobjects/doc/img/QCObjects-CLI-AMP.gif",
	"node_modules/qcobjects/doc/img/QCObjects-Components-Layout 2.gif",
	"node_modules/qcobjects/doc/img/QCObjects-Components-Layout.gif",
	"node_modules/qcobjects/doc/img/QCObjects-Docker-Playground 2.gif",
	"node_modules/qcobjects/doc/img/QCObjects-Docker-Playground.gif",
	"node_modules/qcobjects/doc/img/QCObjects-Quick-Start 2.gif",
	"node_modules/qcobjects/doc/img/QCObjects-Quick-Start.gif",
	"node_modules/qcobjects/doc/img/QCObjects-running-on-Windows64bit 2.gif",
	"node_modules/qcobjects/doc/img/QCObjects-running-on-Windows64bit.gif",
	"node_modules/qcobjects/doc/img/components 2.gif",
	"node_modules/qcobjects/doc/img/components.gif",
	"node_modules/qcobjects/doc/img/home/bg_hr 2.png",
	"node_modules/qcobjects/doc/img/home/bg_hr.png",
	"node_modules/qcobjects/doc/img/home/blacktocat.png",
	"node_modules/qcobjects/doc/img/home/icon_download 2.png",
	"node_modules/qcobjects/doc/img/home/icon_download.png",
	"node_modules/qcobjects/doc/img/home/sprite_download 2.png",
	"node_modules/qcobjects/doc/img/home/sprite_download.png",
	"node_modules/qcobjects/doc/img/icons/icon-128x128 2.png",
	"node_modules/qcobjects/doc/img/icons/icon-128x128.png",
	"node_modules/qcobjects/doc/img/icons/icon-144x144 2.png",
	"node_modules/qcobjects/doc/img/icons/icon-144x144.png",
	"node_modules/qcobjects/doc/img/icons/icon-152x152 2.png",
	"node_modules/qcobjects/doc/img/icons/icon-152x152.png",
	"node_modules/qcobjects/doc/img/icons/icon-192x192 2.png",
	"node_modules/qcobjects/doc/img/icons/icon-192x192.png",
	"node_modules/qcobjects/doc/img/icons/icon-384x384 2.png",
	"node_modules/qcobjects/doc/img/icons/icon-384x384.png",
	"node_modules/qcobjects/doc/img/icons/icon-512x512 2.png",
	"node_modules/qcobjects/doc/img/icons/icon-512x512.png",
	"node_modules/qcobjects/doc/img/icons/icon-72x72 2.png",
	"node_modules/qcobjects/doc/img/icons/icon-72x72.png",
	"node_modules/qcobjects/doc/img/icons/icon-96x96 2.png",
	"node_modules/qcobjects/doc/img/icons/icon-96x96.png",
	"node_modules/qcobjects/doc/img/jeanmachuca 2.png",
	"node_modules/qcobjects/doc/img/jeanmachuca.png",
	"node_modules/qcobjects/doc/index.rst",
	"node_modules/qcobjects/doc/js/cl.quickcorp 2.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.components 2.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.components.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.controller.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.effects 2.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.effects.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.model 2.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.model.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.tools 2.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.tools.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.view 2.js",
	"node_modules/qcobjects/doc/js/cl.quickcorp.view.js",
	"node_modules/qcobjects/doc/js/prism-okaidia 2.js",
	"node_modules/qcobjects/doc/js/prism-okaidia.js",
	"node_modules/qcobjects/doc/templates/components/academy.tpl 2.html",
	"node_modules/qcobjects/doc/templates/components/academy.tpl.html",
	"node_modules/qcobjects/doc/templates/components/blank.md",
	"node_modules/qcobjects/doc/templates/components/blank.tpl.html",
	"node_modules/qcobjects/doc/templates/components/main.tpl 2.html",
	"node_modules/qcobjects/doc/templates/components/main.tpl.html",
	"node_modules/qcobjects/doc/templates/components/page1 2.html",
	"node_modules/qcobjects/doc/templates/components/page1.html",
	"node_modules/qcobjects/doc/templates/components/page2 2.html",
	"node_modules/qcobjects/doc/templates/components/page2.html",
	"node_modules/qcobjects/doc/templates/components/pwa.tpl 2.html",
	"node_modules/qcobjects/doc/templates/components/pwa.tpl.html",
	"node_modules/qcobjects/doc/templates/components/snippet.tpl 2.html",
	"node_modules/qcobjects/doc/templates/components/snippet.tpl.html",
	"node_modules/qcobjects/doc/templates/components/thanksvideo.tpl 2.html",
	"node_modules/qcobjects/doc/templates/components/thanksvideo.tpl.html",
	"node_modules/qcobjects/doc/test_service_response 2.html",
	"node_modules/qcobjects/doc/test_service_response.html",
	"node_modules/qcobjects/docker-compose.test.yml",
	"node_modules/qcobjects/example1.html",
	"node_modules/qcobjects/example2-routing.html",
	"node_modules/qcobjects/favicon.ico",
	"node_modules/qcobjects/humans.txt",
	"node_modules/qcobjects/index.html",
	"node_modules/qcobjects/index.rst",
	"node_modules/qcobjects/install_qcobjects_macOS.sh",
	"node_modules/qcobjects/install_qcobjects_ubuntu18x.sh",
	"node_modules/qcobjects/manifest.json",
	"node_modules/qcobjects/package.json",
	"node_modules/qcobjects/qcobjects_01.png",
	"node_modules/qcobjects/robots.txt",
	"node_modules/qcobjects/spec/support/jasmine 2.json",
	"node_modules/qcobjects/spec/support/jasmine.json",
	"node_modules/qcobjects/spec/testsSpec 2.js",
	"node_modules/qcobjects/spec/testsSpec.js",
	"node_modules/qcobjects/sw.js",
	"node_modules/qcobjects-cli/README.md",
	"node_modules/qcobjects-cli/backend/org.quickcorp.backend.php.js",
	"node_modules/qcobjects-cli/generatekeys.sh",
	"node_modules/qcobjects-cli/localhost-cert.pem",
	"node_modules/qcobjects-cli/localhost-privkey.pem",
	"node_modules/qcobjects-cli/org.quickcorp.qcobjects.cli.js",
	"node_modules/qcobjects-cli/org.quickcorp.qcobjects.defaultsettings.js",
	"node_modules/qcobjects-cli/org.quickcorp.qcobjects.main.file.js",
	"node_modules/qcobjects-cli/org.quickcorp.qcobjects.main.http.express.server.js",
	"node_modules/qcobjects-cli/org.quickcorp.qcobjects.main.http.gae.server.js",
	"node_modules/qcobjects-cli/org.quickcorp.qcobjects.main.http2.server.js",
	"node_modules/qcobjects-cli/package.json",
	"node_modules/qcobjects-cli/qcobjects-cli.js",
	"node_modules/qcobjects-cli/qcobjects-createcert.js",
	"node_modules/qcobjects-cli/qcobjects-gae-http-server.js",
	"node_modules/qcobjects-cli/qcobjects-http2-server.js",
	"node_modules/qcobjects-cli/qcobjects-shell.js",
	"node_modules/qcobjects-cli/spec/support/jasmine.json",
	"node_modules/qcobjects-cli/spec/testsSpec.js",
	"node_modules/qcobjects-cli/templates/apps/spa-local.html",
	"node_modules/qcobjects-cli/templates/apps/spa-local.js",
	"node_modules/qcobjects-cli/templates/pwa/sw.js",
	"node_modules/qcobjects-sdk/CNAME",
	"node_modules/qcobjects-sdk/QCObjects-SDK.js",
	"node_modules/qcobjects-sdk/README.md",
	"node_modules/qcobjects-sdk/README.rst",
	"node_modules/qcobjects-sdk/_config.yml",
	"node_modules/qcobjects-sdk/css/basic-layout-embedded-nav.css",
	"node_modules/qcobjects-sdk/css/basic-layout.css",
	"node_modules/qcobjects-sdk/favicon.ico",
	"node_modules/qcobjects-sdk/index.rst",
	"node_modules/qcobjects-sdk/js/org.quickcorp.components.js",
	"node_modules/qcobjects-sdk/js/org.quickcorp.controllers.js",
	"node_modules/qcobjects-sdk/js/org.quickcorp.effects.js",
	"node_modules/qcobjects-sdk/js/org.quickcorp.modal.effects.js",
	"node_modules/qcobjects-sdk/js/org.quickcorp.models.js",
	"node_modules/qcobjects-sdk/js/org.quickcorp.tools.canvas.js",
	"node_modules/qcobjects-sdk/js/org.quickcorp.tools.js",
	"node_modules/qcobjects-sdk/js/org.quickcorp.tools.layouts.js",
	"node_modules/qcobjects-sdk/js/org.quickcorp.views.js",
	"node_modules/qcobjects-sdk/package.json",
	"node_modules/qcobjects-sdk/spec/support/jasmine.json",
	"node_modules/qcobjects-sdk/spec/testsSpec.js",
	"node_modules/qcobjects-sdk/templates/components/swagger-ui.tpl.html",
	"node_modules/source-map/CHANGELOG.md",
	"node_modules/source-map/LICENSE",
	"node_modules/source-map/README.md",
	"node_modules/source-map/dist/source-map.debug.js",
	"node_modules/source-map/dist/source-map.js",
	"node_modules/source-map/dist/source-map.min.js",
	"node_modules/source-map/dist/source-map.min.js.map",
	"node_modules/source-map/lib/array-set.js",
	"node_modules/source-map/lib/base64-vlq.js",
	"node_modules/source-map/lib/base64.js",
	"node_modules/source-map/lib/binary-search.js",
	"node_modules/source-map/lib/mapping-list.js",
	"node_modules/source-map/lib/quick-sort.js",
	"node_modules/source-map/lib/source-map-consumer.js",
	"node_modules/source-map/lib/source-map-generator.js",
	"node_modules/source-map/lib/source-node.js",
	"node_modules/source-map/lib/util.js",
	"node_modules/source-map/package.json",
	"node_modules/source-map/source-map.d.ts",
	"node_modules/source-map/source-map.js",
	"node_modules/uglify-js/LICENSE",
	"node_modules/uglify-js/README.md",
	"node_modules/uglify-js/bin/uglifyjs",
	"node_modules/uglify-js/lib/ast.js",
	"node_modules/uglify-js/lib/compress.js",
	"node_modules/uglify-js/lib/minify.js",
	"node_modules/uglify-js/lib/mozilla-ast.js",
	"node_modules/uglify-js/lib/output.js",
	"node_modules/uglify-js/lib/parse.js",
	"node_modules/uglify-js/lib/propmangle.js",
	"node_modules/uglify-js/lib/scope.js",
	"node_modules/uglify-js/lib/sourcemap.js",
	"node_modules/uglify-js/lib/transform.js",
	"node_modules/uglify-js/lib/utils.js",
	"node_modules/uglify-js/package.json",
	"node_modules/uglify-js/tools/domprops.json",
	"node_modules/uglify-js/tools/exit.js",
	"node_modules/uglify-js/tools/exports.js",
	"node_modules/uglify-js/tools/node.js",
	"node_modules/uglify-js/tools/props.html",
	"node_modules/wordwrap/LICENSE",
	"node_modules/wordwrap/README.markdown",
	"node_modules/wordwrap/example/center.js",
	"node_modules/wordwrap/example/meat.js",
	"node_modules/wordwrap/index.js",
	"node_modules/wordwrap/package.json",
	"node_modules/wordwrap/test/break.js",
	"node_modules/wordwrap/test/idleness.txt",
	"node_modules/wordwrap/test/wrap.js",
	"package-lock.json",
	"package.json",
	"robots.txt",
	"spec/support/jasmine.json",
	"spec/testsSpec.js",
	"templates/components/article1.tpl.html",
	"templates/components/article2.tpl.html",
	"templates/components/article3.tpl.html",
	"templates/components/article4.tpl.html",
	"templates/components/blank.tpl.html",
	"templates/components/card.tpl.html",
	"templates/components/contentblock.tpl.html",
	"templates/components/footer.tpl.html",
	"templates/components/footer2.tpl.html",
	"templates/components/header.tpl.html",
	"templates/components/login.tpl.html",
	"templates/components/login2.tpl.html",
	"templates/components/loginform.tpl.html",
	"templates/components/main.tpl.html",
	"templates/components/modal.tpl.html",
	"templates/components/nav.tpl.html",
	"templates/components/pages/page1.tpl.html",
	"templates/components/pages/page2.tpl.html",
	"templates/components/pages/page3.tpl.html",
	"templates/components/pwa.tpl.html",
	"templates/components/section1.tpl.html",
	"templates/components/section2.tpl.html",
	"templates/components/signin.tpl.html",
	"templates/components/signup.tpl.html",
	"templates/components/signupbuttons.tpl.html",
	"templates/components/signuppage.tpl.html"])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});

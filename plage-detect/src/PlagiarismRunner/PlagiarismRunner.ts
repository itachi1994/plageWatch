import IASTGenerator from "../ASTGenerator/IASTGenerator";
import IDetectorFactory from "../DetectorFactory/IDetectorFactory";
import IFilePathGetter from "../FilePathGetter/IFilePathGetter";
import IPlagDetector from "../PlagDetector/IPlagDetector";

class PlagiarismRunner {
    private submission1Path: string;
    private submission2Path: string;

    constructor(submission1Path: string, submission2Path: string ) {
        this.submission1Path = submission1Path;
        this.submission2Path = submission2Path;
    }

    runPlagiarism(detectorFactory: IDetectorFactory ) {
        const filePathGetter:IFilePathGetter  =  detectorFactory.makeFilePathGetter();

        const sub1FilePaths: Array<string> = filePathGetter.getFilePaths(this.submission1Path);
        const sub2FilePaths: Array<string> = filePathGetter.getFilePaths(this.submission2Path);

        const sub1ASTGen: IASTGenerator=detectorFactory.makeASTGenerator(sub1FilePaths);
        const sub2ASTGen: IASTGenerator=detectorFactory.makeASTGenerator(sub2FilePaths);

        const sub1Nodes: Array<any> = sub1ASTGen.generateASTs();
        const sub1MapFileToContent:any = sub1ASTGen.getFileContents();
        const sub1FileMaps: any = sub1ASTGen.getFileMaps();


        const sub2Nodes: Array<any> = sub2ASTGen.generateASTs();
        const sub2MapFileToContent:any = sub2ASTGen.getFileContents();
        const sub2FileMaps: any = sub2ASTGen.getFileMaps();

        const plagDetector: IPlagDetector = detectorFactory.makePlagDetector(sub1Nodes, sub2Nodes,sub1FileMaps, sub2FileMaps, sub1MapFileToContent, sub2MapFileToContent );
        const result: any =  plagDetector.detect()
        // if(Number.isNaN(result['score'])){
        //     result['score'] = 0
        // }
        return result;

    }
}

export default PlagiarismRunner;